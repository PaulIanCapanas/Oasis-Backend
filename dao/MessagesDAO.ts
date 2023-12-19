import db from '../../Oasis-Database/db';
import ContactsService from '../service/ContactsService';
import UserService from '../service/UserService';

class MessagesDAO {
  async createMessage(sender_id: number, receiver_id: number, content: string) {
    // note for later: use the UserService to check if the receiver exists
    const receiverCheck = await db('User').where('id', receiver_id);
    if (receiverCheck.length === 0) {
      return 'receiver not found';
    }
    // note for later: use the ContacsService to check if the sender and receiver are contacts
    const conversationCheck = await db('Contacts')
      .where('sender_id', sender_id)
      .andWhere('receiver_id', receiver_id)
      .orWhere('sender_id', receiver_id)
      .andWhere('receiver_id', sender_id);
    
    let conversationID: number;

    if (conversationCheck.length === 0) {
      [conversationID] = await db('Contacts').insert({
        sender_id,
        receiver_id
      }).returning('id');
    }
    conversationID = conversationCheck[0].id;

    const [id] = await db('Messages').insert({
      content,
      conversationID
    }).returning('id');
  }
  // get the messages with the contacts using inner join
  async getMessages(message_id: number, contacts_id: number) {
    const messages = await db('Messages')
      .innerJoin('Contacts', 'Messages.conversationID', 'Contacts.id')
      .where('Messages.id', message_id)
      .andWhere('Contacts.id', contacts_id);
    return messages;
  }

  async updateMessages(id: number, content: string) {
    const [updated] = await db('Messages').where('id', id).update({
      content
    }).returning('id');
    return updated;
  }

  async deleteMessages(id: number) {
    const deleted = await db('Messages').where('id', id).del();
    return deleted;
  }
}

export default new MessagesDAO();