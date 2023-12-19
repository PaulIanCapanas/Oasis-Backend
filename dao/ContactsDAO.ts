import db from '../../Oasis-Database/db';

class ContactsDAO {
  async createContact(sender_id: number, receiver_id: number) {
    const [id] = await db('Contacts').insert({
      sender_id,
      receiver_id
    }).returning('id');
    return id;
  }

  async getContacts(id: number) {
    const contacts = await db('Contacts').where('sender_id', id).orWhere('receiver_id', id);
    return contacts;
  }

  async updateContacts(id: number, sender_id: number, receiver_id: number) {
    const [updated] = await db('Contacts').where('id', id).update({
      sender_id,
      receiver_id
    }).returning('id');
    return updated;
  }

  async deleteContacts(id: number) {
    const deleted = await db('Contacts').where('id', id).del();
    return deleted;
  }
}

export default new ContactsDAO();