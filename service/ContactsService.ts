import ContactsDAO from '../dao/ContactsDAO';

class ContactsService {
  async createContact(sender_id: number, receiver_id: number) {
    const id = await ContactsDAO.createContact(sender_id, receiver_id);
    return id;
  }
  
  async getContacts(id: number) {
    const contacts = await ContactsDAO.getContacts(id);
    return contacts;
  }

  async updateContacts(id: number, sender_id: number, receiver_id: number) {
    const updated = await ContactsDAO.updateContacts(id, sender_id, receiver_id);
    return updated;
  }

  async deleteContacts(id: number) {
    const deleted = await ContactsDAO.deleteContacts(id);
    return deleted;
  }
}

export default new ContactsService();