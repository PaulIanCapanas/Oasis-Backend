import express from 'express';
import { userRouter } from './user/Users';
import { buildingOwnerRouter } from './building owner/building_owners';

export const router = express.Router();

router.use('/user', userRouter);
router.use('building-owner', buildingOwnerRouter)