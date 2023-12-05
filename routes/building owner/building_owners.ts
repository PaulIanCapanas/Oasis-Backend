import express from 'express';
import BuildingOwnerController from '../../controller/BuildingOwnerController';

export const buildingOwnerRouter = express.Router();

buildingOwnerRouter.get('/get-user', BuildingOwnerController.getBuildingOwner);
buildingOwnerRouter.post('/create-user', BuildingOwnerController.createBuildingOwner);
buildingOwnerRouter.put('/update-user', BuildingOwnerController.updateBuildingOwner);
buildingOwnerRouter.delete('/delete-user', BuildingOwnerController.deleteBuildingOwner);
