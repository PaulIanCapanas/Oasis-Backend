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
    try {
      const { first_name, last_name, email, password, phone_number, age, user_type } = req.body;
  
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const userData: IPersonDataEncrypted = {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone_number,
        age,
        user_type,
      };
  
      const createdUserId = await UserService.createUser(userData);
  
      res.status(201).json({ id: createdUserId });
    } catch (err) {
      console.error('Create User Error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async loginUser(req: express.Request, res: express.Response) {
    try {
      const { email, password } = req.body;
      const result = await UserService.getUserByEmail(email);

      if (!result) {
        return res.status(401).json({ message: 'Email does not exist' });
      }

      const user = result;

      const passwordMatch = await bcrypt.compare(password, user.password);
      const secretKey = process.env.SECRET_KEY as Secret; 

      if (passwordMatch) {
        const token = jwt.sign({ _id: user.id.toString(), email: user }, secretKey, {
          expiresIn: '1 days',
        });
        return res.json({ message: 'Login success!', user: { id: user.id, email: user.email }, token: token });
      } else{
        throw new Error('Password is not correct');
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
