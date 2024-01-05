import express from 'express';
import BuildingController from '../../controller/BuildingController';

export const buildingRouter = express.Router();

buildingRouter.get('/get-building', BuildingController.getBuilding);
buildingRouter.get('/get-buildings/:id', BuildingController.getBuildingWithinRadius);
buildingRouter.post('/create-building', BuildingController.createBuilding);
buildingRouter.put('/update-building', BuildingController.updateBuilding);
buildingRouter.delete('/delete-building', BuildingController.deleteBuilding);
