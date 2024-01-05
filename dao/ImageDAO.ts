import knex from '../../Oasis-Database/db';

interface FileData {
  originalname: string;
  filename: string;
}

const insertFile = async (fileData: FileData): Promise<any> => {
  try {
    const [fileId] = await knex('files').insert(fileData, 'id');

    const savedFile = await knex('files').where('id', fileId).first();

    return savedFile;
  } catch (error) {
    throw error;
  }
};

export default {
  insertFile,
};
