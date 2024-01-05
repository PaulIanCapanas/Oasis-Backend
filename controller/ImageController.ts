import { Request, Response } from 'express';
import ImageService from '../service/ImageService';
import ImageDAO from '../dao/ImageDAO';
import { Knex } from 'knex';

class ImageController {
  private imageService: ImageService;

  constructor(knex: Knex) {
    const imageDAO = new ImageDAO(knex);
    this.imageService = new ImageService(imageDAO);
  }

  uploadImage(req: Request, res: Response): void {
    this.imageService.uploadImage(req, res);
  }
}

export default ImageController;