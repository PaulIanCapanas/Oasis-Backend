import TicketService from "../service/TicketService";
import express from 'express';

class TicketController {
  async createTicket(req: express.Request, res: express.Response) {
    try {
      const id = await TicketService.createTicket(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"ticket service error": err});
    }
  }

  async getTicket(req: express.Request, res: express.Response) {
    try {
      const id = await TicketService.getTicket(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"ticket service error": err});
    }
  }

  async updateTicket(req: express.Request, res: express.Response) {
    try {
      const id = await TicketService.updateTicket(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"ticket service error": err});
    }
  }

  async deleteTicket(req: express.Request, res: express.Response) {
    try {
      const id = await TicketService.deleteTicket(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"ticket service error": err});
    }
  }
}

export default new TicketController();