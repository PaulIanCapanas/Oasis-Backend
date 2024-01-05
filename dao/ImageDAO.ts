import db from '../../Oasis-Database/db';

interface File {
  id: number;
  originalname: string;
  filename: string;
  user_id: number;
}

class ImageDAO {
  async uploadFile(originalname: string, filename: string, user_id: number): Promise<File> {
    const [file]: File[] = await db('files').insert({
      originalname,
      filename,
      user_id
    }).returning('*');

    return file;
  }

  async getFileById(file_id: number): Promise<File | undefined> {
    const file: File | undefined = await db('files')
      .where({ id: file_id })
      .first();

    return file;
  }

  async deleteFile(file_id: number): Promise<File[]> {
    const deletedFile: File[] = await db('files')
      .where({ id: file_id })
      .del()
      .returning('*');

    return deletedFile;
  }
}

export default new ImageDAO();
