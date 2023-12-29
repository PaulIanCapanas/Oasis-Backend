import ImageDAO from '../dao/ImageDAO';

class ImageService {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    return ImageDAO.saveImage(file);
  }
}

export default new ImageService();