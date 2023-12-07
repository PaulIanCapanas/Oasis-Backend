import express from 'express';
import RoomController from '../../controller/RoomController';

export const roomRouter = express.Router();

roomRouter.get('/get-room', RoomController.getRoom);
roomRouter.post('/create-room', RoomController.createRoom);
roomRouter.put('/update-room', RoomController.updateRoom);
roomRouter.post('/delete-room', RoomController.deleteRoom);