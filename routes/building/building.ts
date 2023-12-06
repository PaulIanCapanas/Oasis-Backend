import express from 'express';
import BuildingController from '../../controller/BuildingController';

export const buildingRouter = express.Router();

buildingRouter.get('/get-user', BuildingController.getBuilding);
buildingRouter.post('/create-user', BuildingController.createBuilding);
buildingRouter.put('/update-user', BuildingController.updateBuilding);
buildingRouter.delete('/delete-user', BuildingController.deleteBuilding);
