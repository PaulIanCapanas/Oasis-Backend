import express from 'express';
import TicketController from '../../controller/TicketController';

export const ticketRouter = express.Router();

ticketRouter.get('/get-ticket', TicketController.getTicket);
ticketRouter.post('/create-ticket', TicketController.createTicket);
ticketRouter.put('/update-ticket', TicketController.updateTicket);
ticketRouter.delete('/delete-ticket', TicketController.deleteTicket);