// import knexfile development
import db from '../../Oasis-Database/db';

class MessageDAO {
  async createMessage(sender_id: number, contact_id: number, message: string) {
    const [content] = await db('Messages').insert({
      sender_id,
      contact_id,
      message
    }).returning('content');
    return content;
  }

  async getMessagesByContact(contact_id: number) {
    const messages = await db('Messages')
      .join('Contacts', 'Messages.contact_id', '=', 'Contacts.id')
      .where({
        'Contacts.sender_id': contact_id,
        'OR': [{ 'Contacts.receiver_id': contact_id }],
      })
      .select('*');
    return messages;
  }
  // might be wrong
  async updateMessage(message_id: number, message: string) {
    const [content] = await db('Messages')
      .where({ id: message_id })
      .update({ message })
      .returning('content');
    
    if (content === 0) {
      throw new Error('Message not found');
    }
    return content;
  }

  async deleteMessage(contact_id: number, message_id: number, sender_id: number) {
    const deletedMessage = await db('Messages')
      .where({ message_id, contact_id, })
      .andWhere({ sender_id })
      .del()
      .returning('*');
    return deletedMessage;
  }
}

export default new MessageDAO();