//note: data validation should be here.

import express from 'express';
import UserService from '../service/UserService';

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

  async getUser(req: express.Request, res: express.Response) {
    try {
      const user = await UserService.getUser(req.body.id);
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
