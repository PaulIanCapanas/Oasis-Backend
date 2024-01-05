import uploadDAO from '../dao/ImageDAO';

interface FileData {
  originalname: string;
  filename: string;
}

const saveFile = async (fileData: FileData): Promise<any> => {
  try {
    const savedFile = await uploadDAO.insertFile(fileData);
    return savedFile;
  } catch (error) {
    throw error;
  }
};

export default {
  saveFile,
};
