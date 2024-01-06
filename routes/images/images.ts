import express, { Request, Response } from 'express';
import ImageController from '../../controller/ImageController';
import upload from '../../middleware/multer';
import path from 'path';
import db from '../../../Oasis-Database/db';

export const imageRouter = express.Router();

const imageController = new ImageController();

imageRouter.post('/upload-image', upload.single('image'), async(req: Request, res: Response) => {
    console.log(req.file)
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      const filePath = path.join(__dirname, '../uploaded-images', req.file.filename) ;
      try {
        const insertedFile = await db('files').insert({
          filename: req.file.filename,
          originalname: 'palagpat',
          user_id: 1,
          path: filePath,
        }).returning('*');
    
        return res.json({
          message: 'File uploaded successfully.',
          file: insertedFile[0],
        });
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error uploading file to the database.' });
      }
});
