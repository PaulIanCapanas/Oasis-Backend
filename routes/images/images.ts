import express, { Request, Response } from 'express';
import ImageController from '../../controller/ImageController';

export const imageRouter = express.Router();

const imageController = new ImageController();

imageRouter.post('/upload-image', (req: Request, res: Response) => imageController.uploadFile(req, res));
