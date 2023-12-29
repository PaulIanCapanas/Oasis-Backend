import express from 'express';
import ImageController from '../../controller/ImageController';

export const imageRouter = express.Router();

imageRouter.post('/upload-image', ImageController.uploadImage);

// imageRouter.get('/get-image/:image_id', ImageController.getImage);
// imageRouter.put('/update-image/:image_id', ImageController.updateImage);
// imageRouter.delete('/delete-image/:image_id', ImageController.deleteImage);
