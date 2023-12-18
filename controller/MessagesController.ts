import express from "express";
import MessagesService from "../service/MessagesService";

class MessagesController {
  async createMessage(req: express.Request, res: express.Response) {
    const { sender_id, receiver_id, content } = req.body;
    const id = await MessagesService.createMessage(sender_id, receiver_id, content);
    res.json({ id });
  }

  async getMessages(req: express.Request, res: express.Response) {
    const { contacts_param_id } = req.params;
    const contacts_id = parseInt(contacts_param_id);
    const { message_id } = req.body;
    const messages = await MessagesService.getMessages(contacts_id, message_id);
    res.json(messages);
  }

  async updateMessages(req: express.Request, res: express.Response) {
    const { param_id } = req.params;
    const id = parseInt(param_id);
    const { content } = req.body;
    const updated = await MessagesService.updateMessages(id, content);
    res.json({ updated });
  }

  async deleteMessages(req: express.Request, res: express.Response) {
    const { param_id } = req.params;
    const id = parseInt(param_id);
    const deleted = await MessagesService.deleteMessages(id);
    res.json({ deleted });
  }
}

export default new MessagesController();