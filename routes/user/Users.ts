import express from 'express';
import UserController from '../../controller/UserController';

export const userRouter = express.Router();

userRouter.get('/get-user', UserController.getUser);
userRouter.post('/login-user', UserController.loginUser);
userRouter.post('/create-user', UserController.createUser);
userRouter.put('/update-user', UserController.updateUser);
userRouter.delete('/delete-user', UserController.deleteUser);
