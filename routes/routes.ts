import express from 'express';
import { userRouter } from './user/Users';
import { buildingOwnerRouter } from './building owner/building_owners';
import { boarderRouter } from './boarder/boarder';

export const router = express.Router();

router.use('/user', userRouter);
router.use('/building-owner', buildingOwnerRouter)
router.use('/boarder',boarderRouter)
