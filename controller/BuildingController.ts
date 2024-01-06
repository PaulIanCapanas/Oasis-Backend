import express from 'express';
import BuildingService from '../service/BuildingService';

class BuildingController {
  async createBuilding(req: express.Request, res: express.Response) {
    try {
      const { name, user_id, longitude, latitude, description, address } = req.body;
      const id = await BuildingService.createBuilding(name, user_id, latitude, longitude, description, address);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"Building service error": err});
    }
  }

  async getBuilding(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingService.getBuilding(parseInt(req.params.id));
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"Building service error": err});
    }
  }

  async getBuildingWithinRadius(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingService.getBuildingWithinRadius(req.body.lat, req.body.lng);
      res.status(201).json({id});
    } catch (err) {
      console.log(err)
      res.status(500).json({"Building service error": err});
    }
  }

  async updateBuilding(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingService.updateBuilding(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"Building service error": err});
    }
  }

  async deleteBuilding(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingService.deleteBuilding(req.body);
      res.status(201).json({id});
    } catch (err) {
      res.status(500).json({"Building service error": err});
    }
  }
}

export default new BuildingController();