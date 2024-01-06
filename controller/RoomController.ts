import express from 'express';
import RoomService from '../service/RoomService';
import bcrypt from 'bcrypt'

class RoomController{
    async createRoom(req: express.Request, res: express.Response) {
        try {
            const id = await RoomService.createRoom(req.body)
            res.status(201).json({id});
        } catch (err) {
            res.status(500).json({"Room Controller error": err})
        }
    }

    async getRoom(req: express.Request, res: express.Response){
        try {
           const room = await RoomService.getRoom(req.body)
           res.status(200).json({room});
        } catch (err) {
          res.status(500).json({"Room Controller error": err})
        }
    }

    async updateRoom(req: express.Request, res: express.Response) {
        try {
            const room = await RoomService.updateRoom(req.body)
            res.status(200).json({room});
        } catch (err) {
          res.status(500).json({"Room Controller error": err})
        }
    }

    async deleteRoom(req: express.Request, res: express.Response) {
        try {
            const room = await RoomService.updateRoom(req.body)
            res.status(200).json({room});
        } catch (err) {
          res.status(500).json({"Room Controller error": err})
        }
    }
    
}

export default new RoomController();