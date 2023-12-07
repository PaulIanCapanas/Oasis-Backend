import express from 'express';
import UserController from '../../controller/UserController';

export const userRouter = express.Router();

userRouter.get('/get-user', UserController.getUser);
userRouter.put('/update-user', UserController.updateUser);
userRouter.delete('/delete-user', UserController.deleteUser);
userRouter.post('/login', UserController.loginUser);
userRouter.post('/register', UserController.createUser);

