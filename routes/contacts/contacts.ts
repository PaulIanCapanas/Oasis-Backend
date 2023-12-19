import express from 'express';
import ContactsController from '../../controller/ContactsController';

export const contactsRouter = express.Router();

contactsRouter.post('/create-contact', ContactsController.createContact);
contactsRouter.get('/get-contacts/:param_id', ContactsController.getContacts);
contactsRouter.put('/update-contacts/:param_id', ContactsController.updateContacts);
contactsRouter.post('/delete-contacts/:param_id', ContactsController.deleteContacts);