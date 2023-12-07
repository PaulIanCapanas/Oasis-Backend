//note: data validation should be here.

import express from 'express';
import UserService from '../service/UserService';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();


class UserController {
  async createUser(req: express.Request, res: express.Response) {
    try {
      const id = await UserService.createUser(req.body);
      console.log(id)
      res.status(201).json({id})
    } catch(err) {
      console.log(err)
      res.status(500).json({"user controller error": err})
    }
  }

  async loginUser(req: express.Request, res: express.Response) {
    const { email, password } = req.body;

    try {
      const result = await UserService.getUserByEmail(email);

      if (!result) {
        return res.status(401).json({ message: 'Email does not exist' });
      }

      const user = result;

      const passwordMatch = await bcrypt.compare(password, user.password);
      const secretKey = process.env.SECRET_KEY || 'aaronpogi'; 

      if (passwordMatch) {
        const token = jwt.sign({ _id: UserService.getUserbyId?.toString(), email: UserService.getUserByEmail }, secretKey, {
          expiresIn: '1 days',
        });
      }
      return res.json({ message: 'Login success!', user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.getUserbyId(req.body.id);
      res.status(200).json(user);
    } catch(err) {
      console.log(err)
      res.status(500).json({"user controller error": err})
    }
  }

  async updateUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.updateUser(req.body);
      res.status(200).json(user);
    } catch(err) {
      console.log(err)
      res.status(500).json({"user controller error": err})
    }
  }

  async deleteUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.deleteUser(parseInt(req.body.id));
      res.status(200).json(user);
    } catch(err) {
      console.log(err)
      res.status(500).json({"user controller error": err})
    }
  }
}

export default new UserController();
