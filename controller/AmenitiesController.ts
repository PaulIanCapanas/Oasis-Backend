import express from 'express';
import AmenitiesService from '../service/AmenitiesService';
import bcrypt from 'bcrypt'


class AmenitiesController{
    async createAmenities(req: express.Request, res: express.Response) {
        try {
            const id = await AmenitiesService.createAmenities(req.body);
            res.status(201).json({id});
        } catch (err) {
            res.status(500).json({"Amenities controller error": err});
        }
    }

    async getAmenities(req: express.Request, res: express.Response) {
        try {
            const id = await AmenitiesService.createAmenities(req.body);
            res.status(200).json({id});
        } catch (err) {
            res.status(500).json({"Amenities controller error": err});
        }
    }

    async updateAmenities(req: express.Request, res: express.Response){
        try {
            const id = await AmenitiesService.createAmenities(req.body);
            res.status(201).json({id});
        } catch (err) {
            res.status(500).json({"Amenities Service Error": err});
        }
    }
    
    async deleteAmenities(req: express.Request, res: express.Response) {
        try {
            const id = await AmenitiesService.deleteAmenities(req.body);
            res.status(201).json({id});
         } catch(err){
            res.status(500).json({"Amenities Service Error":err});
         }
    }   
}

export default new AmenitiesController();