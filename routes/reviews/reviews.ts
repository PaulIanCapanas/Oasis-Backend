import express from 'express';
import ReviewsController from '../../controller/ReviewsController';

export const reviewsRouter = express.Router()

reviewsRouter.get('/get-reviews', ReviewsController.getReviews);
reviewsRouter.post('/create-reviews', ReviewsController.createReviews);
reviewsRouter.put('/edit-reviews', ReviewsController.updateReviews);
reviewsRouter.delete('/delete-reviews', ReviewsController.deleteReviews);