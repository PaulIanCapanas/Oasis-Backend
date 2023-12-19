import express from 'express';
import MessageController from '../../controller/MessageController';

export const messageRouter = express.Router();

messageRouter.get('/get-messages', MessageController.getMessagesByContact);
messageRouter.post('/create-message', MessageController.createMessage);
messageRouter.put('/update-message', MessageController.updateMessage);
messageRouter.delete('/delete-message', MessageController.deleteMessage);
