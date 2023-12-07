//note: data validation should be here.

import express from 'express';
import UserService from '../service/UserService';
import bcrypt from 'bcrypt'

class UserController {
  async createUser(req: express.Request, res: express.Response) {
    try {
      const id = await UserService.createUser(req.body);
      res.status(201).json({id});
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

      const user = result;

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      return res.json({ message: 'Login success!', user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.getUser(req.body.id);
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
