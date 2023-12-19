// was made in a rush, so it's not the best code, and it may not work properly (or at all)

import MessageService from "../service/MessageService";

class MessaveController {
  async createMessage(req: any, res: any) {
    const { sender_id, contact_id, message } = req.body;
    const content = await MessageService.createMessage(sender_id, contact_id, message);
    return res.json(content);
  }

  async getMessagesByContact(req: any, res: any) {
    const { contact_id } = req.body;
    const messages = await MessageService.getMessagesByContact(contact_id);
    return res.json(messages);
  }

  async updateMessage(req: any, res: any) {
    const { message_id, message } = req.body;
    const content = await MessageService.updateMessage(message_id, message);
    return res.json(content);
  }

  async deleteMessage(req: any, res: any) {
    const { contact_id, message_id } = req.params;
    const { sender_id } = req.body;
    const deletedMessage = await MessageService.deleteMessage(contact_id, message_id, sender_id);
    return res.json(deletedMessage);
  }
}

export default new MessaveController();