import multer from 'multer';
import path from 'path';
import { generateUniqueFilename } from '../controller/ImageController';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploaded-images'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = generateUniqueFilename(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });
