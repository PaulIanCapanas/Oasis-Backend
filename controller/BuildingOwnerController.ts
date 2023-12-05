import express from 'express';
import BuildingOwnerService from '../service/BuildingOwnerService';

class BuildingOwnerController {
  async createBuildingOwner(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingOwnerService.createBuildingOwner(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"building owner controller error": err});
    }
  }

  async getBuildingOwner(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingOwnerService.getBuildingOwner(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"building owner controller error": err});
    }
  }

  async updateBuildingOwner(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingOwnerService.updateBuildingOwner(req.body);
      res.status(201).json({id})
    } catch (err) {
      res.status(500).json({"building owner controller error": err});
    }
  }

  async deleteBuildingOwner(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingOwnerService.deleteBuildingOwner(req.body);
      res.status(201).json({id})
    } catch(err) {
      res.status(500).json({"building owner controller error": err});
    }
  }
}

export default new BuildingOwnerController()