import * as path from 'path';
import multer from 'multer';
import { Request } from 'express';

type DestinationFunction = (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => void;

const imageDirectory: string = path.join(__dirname, '../images');

const storage = multer.diskStorage({
    destination: ((req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'images');
    }) as DestinationFunction,
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname +
                '-' +
                uniqueSuffix +
                path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage });

export {
    upload,
    imageDirectory,
};
