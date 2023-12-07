import express from 'express';
import UserController from '../../controller/UserController';
import {auth} from '../../middleware/auth'

export const userRouter = express.Router();

userRouter.get('/get-user', auth, UserController.getUser);
userRouter.post('/create-user', UserController.createUser);
userRouter.put('/update-user', UserController.updateUser);
userRouter.delete('/delete-user', UserController.deleteUser);
userRouter.post('/login-user', auth, UserController.loginUser);
userRouter.post('/register', auth, UserController.createUser);
