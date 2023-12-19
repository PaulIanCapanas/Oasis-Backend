//note: data validation should be here.

import express from 'express';
import UserService from '../service/UserService';
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

interface IPersonDataEncrypted {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone_number: string,
  age: number,
  user_type: string
}

dotenv.config();


class UserController {
  async createUser(req: express.Request, res: express.Response) {
    const user = req.body;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$/;

    const{ email, password } = user;
    try {

      const userByEmail = await UserService.getAllUserByEmail(email);

      if (userByEmail.length > 0) {
        return res.status(401).json("User Already Exists");
      }

      if (!passwordPattern.test(password)) {
        return res.status(401).json({
          error: 'Invalid password format',
          message: 'Please include at least one uppercase letter, special character, and ensure the password is at least 8 characters long.',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userWithHashedPassword = {
        ...user,
        password: hashedPassword,
      };
    const createdUser = await UserService.createUser(userWithHashedPassword);
    res.status(201).json({ createdUser });
    } catch(err) {
      res.status(500).json({"user controller error": err});

    }
  }


  async loginUser(req: express.Request, res: express.Response) {
    try {
      const { email, password } = req.body;
      const result = await UserService.getUserByEmail(email);

      if (!result) {
        return res.status(401).json({ message: 'Email does not exist' });
      }

      const user = result
      console.log(user.password)

      const passwordMatch = await bcrypt.compare(password, user.password);
      const secretKey = process.env.SECRET_KEY || 'aaronpogi';
     

      if(passwordMatch){
        console.log("nopass")
        const token = jwt.sign({_id: user.id, email: user.email}, secretKey, {
          expiresIn:"24h"
        }); 
        return res.json({
          message: "LogIn Successful",
          success: true,
          token: token,
        });
      }
        else{
          throw new Error('Wrong password')
        }
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
      res.status(500).json({"user controller error": err});
    }
  }

  async updateUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.updateUser(req.body);
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({"user controller error": err});
    }
  }

  async deleteUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.deleteUser(parseInt(req.body.id));
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({"user controller error": err});
    }
  }
}

export default new UserController();

