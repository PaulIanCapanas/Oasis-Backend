//note: error handling should be in here.

import UserController from '../controller/UserController';
import UserDAO from '../dao/UserDAO';
import express from 'express';

interface IPersonData {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone_number: string,
  age: number,
  user_type: string
}

interface ICreateUserData {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone_number: string,
  age: number,
  user_type: string
}

class UserService {
  async createUser(userData: ICreateUserData): Promise<number> {
    const {
      first_name, last_name, email, password, phone_number, age
    } = userData;
    return UserDAO.createUser(
      first_name, last_name, email, password, phone_number, age
    );
  }

  async getUserbyId(id: number) {
    return UserDAO.getUser(id);
  }

  async getAllUserByEmail(email: string) {
    return UserDAO.getAllUserByEmail(email);
  }

  async getUserByEmail(email: string) {
    return UserDAO.getUserByEmail(email);
  }

  async updateUser(personData: IPersonData) {
    const {
      id, first_name, last_name, email, password, phone_number, age
    } = personData;
    return UserDAO.updateUser(
      id, first_name, last_name, email, password, phone_number, age
    );
  }

  async deleteUser(id: number) {
    return UserDAO.deleteUser(id);
  }

  async logInUser(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    try {
      const foundUser = await UserController.loginUser(req, res);
      res.status(200).send(foundUser);
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
export default new UserService();


