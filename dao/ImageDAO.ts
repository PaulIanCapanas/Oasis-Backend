import fs from 'fs/promises';
import path from 'path';

class ImageDAO {
  async saveImage(file: Express.Multer.File): Promise<string> {
    const destination = path.join(__dirname, '../images');
    const filePath = path.join(destination, file.filename);

    await fs.rename(file.path, filePath);

    return file.filename;
  }
}

export default new ImageDAO();