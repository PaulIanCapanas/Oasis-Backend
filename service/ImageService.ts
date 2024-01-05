import { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import ImageDAO from '../dao/ImageDAO';

class ImageService {
  private imageDAO: ImageDAO;
  private multerUpload: Multer;

  constructor(imageDAO: ImageDAO) {
    this.imageDAO = imageDAO;
    this.multerUpload = multer({ dest: 'temp/' });
  }

  uploadImage = async (req: Request, res: Response): Promise<void> => {
    try {
      this.multerUpload.single('image')(req, res, async (err: any) => {
        if (err) {
          return res.status(500).json({ error: 'Image upload failed', details: err.message });
        }

        if (!req.file) {
          return res.status(400).json({ error: 'Image is not provided' });
        }

        const filename = req.file.filename;

        const fileId = await this.imageDAO.saveImage(filename);
        res.status(201).json({ fileId });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Image upload failed', details: 'Unknown error' });
    }
  };
}

export default ImageService;
