import ContactsService from "../service/ContactsService";
import express from 'express';

class ContactsController {
  async createContact(req: express.Request, res: express.Response) {
    const { sender_id, receiver_id } = req.body;
    const id = await ContactsService.createContact(sender_id, receiver_id);
    res.json({ id });
  }

  async getContacts(req: express.Request, res: express.Response) {
    const { param_id } = req.params;
    const id = parseInt(param_id);
    const contacts = await ContactsService.getContacts(id);
    res.json(contacts);
  }

  async updateContacts(req: express.Request, res: express.Response) {
    const { param_id } = req.params;
    const id = parseInt(param_id);
    const { sender_id, receiver_id } = req.body;
    const updated = await ContactsService.updateContacts(id, sender_id, receiver_id);
    res.json({ updated });
  }

  async deleteContacts(req: express.Request, res: express.Response) {
    const { param_id } = req.params;
    const id = parseInt(param_id);
    const deleted = await ContactsService.deleteContacts(id);
    res.json({ deleted });
  }
}

export default new ContactsController();