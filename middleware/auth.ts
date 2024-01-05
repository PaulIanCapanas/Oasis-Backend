import express from 'express';
import jwt from 'jsonwebtoken';
import cookie from 'cookie'; // Make sure to install this package

// Define an interface for the extended Request type
interface AuthenticatedRequest extends express.Request {
  user?: any; // Replace 'any' with the actual type of your user object
}

export const auth = (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  // Remove "Bearer " prefix
  const token = tokenHeader.replace('Bearer ', '');

  try {
    const secretKey = process.env.SECRET_KEY || 'aaronpogi';
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded user information to the request object
    req.user = decoded;

    // Set the JWT token as an HTTP-only cookie
    res.setHeader('Set-Cookie', cookie.serialize('jwtToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Use HTTPS in production
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    }));

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};