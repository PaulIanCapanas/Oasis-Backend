import ImageDAO from "../dao/ImageDAO";

interface File {
  id: number;
  originalname: string;
  filename: string;
  user_id: number;
}

class ImageService {
  async uploadFile(originalname: string, filename: string, buffer: Buffer): Promise<File> {
    const user_id = 1; 

    const file = await ImageDAO.uploadFile(originalname, filename, user_id);

    return file;
  }

  async getFileById(file_id: number): Promise<File | undefined> {
    const file: File | undefined = await ImageDAO.getFileById(file_id);
    return file;
  }

  async deleteFile(file_id: number): Promise<File[]> {
    const deletedFile: File[] = await ImageDAO.deleteFile(file_id);
    return deletedFile;
  }
}

export default new ImageService();
