import MessagesController from "../../controller/MessagesController";
import express from "express";

export const messagesRouter = express.Router();

messagesRouter.post('/create-message', MessagesController.createMessage);
messagesRouter.get('/get-messages/:param_id', MessagesController.getMessages);
messagesRouter.put('/update-messages/:param_id', MessagesController.updateMessages);
messagesRouter.delete('/delete-messages/:param_id', MessagesController.deleteMessages);