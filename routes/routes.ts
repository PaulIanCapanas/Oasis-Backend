import express from 'express';
import { userRouter } from './user/Users';

export const router = express.Router();

router.use('/user', userRouter);