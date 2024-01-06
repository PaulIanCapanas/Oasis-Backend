import express from 'express';
import BuildingController from '../../controller/BuildingController';

export const buildingRouter = express.Router();

buildingRouter.post('/get-building/:id', BuildingController.getBuilding);
buildingRouter.post('/get-buildings', BuildingController.getBuildingWithinRadius);
buildingRouter.post('/create-building', BuildingController.createBuilding);
buildingRouter.put('/update-building', BuildingController.updateBuilding);
buildingRouter.delete('/delete-building', BuildingController.deleteBuilding);
