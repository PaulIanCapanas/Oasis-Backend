import express from 'express';
import { userRouter } from './user/Users';
import { buildingOwnerRouter } from './building owner/building_owners';
import { boarderRouter } from './boarder/boarder';
import { buildingRouter } from './building/building';
import { contactsRouter } from './contacts/contacts';
import { messagesRouter } from './messages/messages';
import { imageRouter } from './images/images';

export const router = express.Router();

router.use('/upload-image', imageRouter)
router.use('/user', userRouter);
router.use('/building-owner', buildingOwnerRouter);
router.use('/boarder',boarderRouter);
router.use('/building', buildingRouter);
router.use('/contacts', contactsRouter);
router.use('/messages', messagesRouter);