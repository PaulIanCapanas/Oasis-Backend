import express from 'express';
import BoarderService from '../service/BoarderService';

class BoarderController {
  async createBoarder(req: express.Request, res: express.Response) {
    try {
      const id = await BoarderService.createBoarder(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"border service error": err})
    }
  }

  async getBoarder(req: express.Request, res: express.Response) {
    try {
      const id = await BoarderService.getBoarder(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"border service error": err})
    }
  }

  async updateBoarder(req: express.Request, res: express.Response) {
    try {
      const id = await BoarderService.updateBoarder(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"border service error": err})
    }
  }

  async deleteBoarder(req: express.Request, res: express.Response) {
    try {
      const id = await BoarderService.deleteBoarder(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"border service error": err})
    }
  }
}

export default new BoarderController();