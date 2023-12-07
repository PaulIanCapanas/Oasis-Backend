import ReservationService from "../service/ReservationService";
import express from 'express';

class ReservationController {
  async createReservation(req: express.Request, res: express.Response) {
    try {
      const id = await ReservationService.createReservation(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"reservation service error": err});
    }
  }

  async getReservation(req: express.Request, res: express.Response) {
    try {
      const id = await ReservationService.getReservation(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"reservation service error": err});
    }
  }

  async updateReservation(req: express.Request, res: express.Response) {
    try {
      const id = await ReservationService.updateReservation(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"reservation service error": err});
    }
  }

  async deleteReservation(req: express.Request, res: express.Response) {
    try {
      const id = await ReservationService.deleteReservation(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"reservation service error": err});
    }
  }
}

export default new ReservationController();