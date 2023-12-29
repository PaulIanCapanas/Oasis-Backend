import { Request, Response } from 'express';
import ImageService from '../service/ImageService';

class ImageController {
  async uploadImage(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'Image is not provided' });
      }
      const filename = await ImageService.uploadImage(req.file);
      res.status(201).json({ filename });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: 'Image upload failed', details: err.message });
      } else {
        res.status(500).json({ error: 'Image upload failed', details: 'Unknown error' });
      }
    }
  }
}

export default new ImageController();
