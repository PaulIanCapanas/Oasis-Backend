import express from 'express';
import AmenitiesController from '../../controller/AmenitiesController';

export const amenitiesRouter = express.Router()

amenitiesRouter.get('/get-amenities', AmenitiesController.getAmenities);
amenitiesRouter.post('/create-amenities', AmenitiesController.getAmenities);
amenitiesRouter.put('/edit-amenities', AmenitiesController.getAmenities);
amenitiesRouter.delete('/delete-amenities', AmenitiesController.getAmenities);