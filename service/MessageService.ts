import MessageDAO from "../dao/MessageDAO";

class MessageService {
  async createMessage(sender_id: number, contact_id: number, message: string) {
    const content = await MessageDAO.createMessage(sender_id, contact_id, message);
    return content;
  }

  async getMessagesByContact(contact_id: number) {
    const messages = await MessageDAO.getMessagesByContact(contact_id);
    return messages;
  }

  async updateMessage(message_id: number, message: string) {
    const content = await MessageDAO.updateMessage(message_id, message);
    return content;
  }

  async deleteMessage(contact_id: number, message_id: number, sender_id: number) {
    const deletedMessage = await MessageDAO.deleteMessage(contact_id, message_id, sender_id);
    return deletedMessage;
  }
}

export default new MessageService();