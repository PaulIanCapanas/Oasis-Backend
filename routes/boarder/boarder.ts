import express from 'express';
import BoarderController from '../../controller/BoarderController';

export const boarderRouter = express.Router()

boarderRouter.get('/get-boarder', BoarderController.getBoarder);
boarderRouter.post('/create-boarder', BoarderController.createBoarder);
boarderRouter.put('/edit-boarder', BoarderController.updateBoarder);
boarderRouter.delete('/delete-boarder', BoarderController.deleteBoarder);