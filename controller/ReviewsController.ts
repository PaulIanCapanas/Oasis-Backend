import { Request, Response } from 'express';
import ReviewsService from '../service/ReviewsService';

class ReviewsController{
    async createReviews(req: Request, res: Response){
        try {
            const id = await ReviewsService.createReviews(req.body)
            res.status(201).json({id});
        } catch (err) {
            res.status(500).json({"Reviews Controller Error": err})
        }
    }

    async getReviews(req: Request, res: Response){
        try {
            const reviews = await ReviewsService.getReviews(req.body)
            res.status(200).json({reviews});
        } catch (err) {
            res.status(500).json({"Reviews Controller Error": err})
        }
    }

    async updateReviews(req: Request, res: Response){
      try {
        const id = await ReviewsService.updateReviews(req.body);
        res.status(201).json({id});
      } catch (err) {
        res.status(500).json({"Reviews Controller Error": err});
      }     
    }
        
    async deleteReviews(req: Request, res: Response){
        try {
            const reviews = await ReviewsService.updateReviews(req.body)
            res.status(200).json({reviews});
        } catch (err) {
            res.status(500).json({"Reviews Controller Error": err})
        }
    }

}

export default new ReviewsController();