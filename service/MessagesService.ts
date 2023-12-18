import MessagesDAO from "../dao/MessagesDAO";

class MessagesService {
  async createMessage(sender_id: number, receiver_id: number, content: string) {
    return MessagesDAO.createMessage(sender_id, receiver_id, content);
  }

  async getMessages(message_id: number, contacts_id: number) {
    return MessagesDAO.getMessages(message_id, contacts_id);
  }

  async updateMessages(id: number, content: string) {
    return MessagesDAO.updateMessages(id, content);
  }

  async deleteMessages(id: number) {
    return MessagesDAO.deleteMessages(id);
  }
}

export default new MessagesService()