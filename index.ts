import express from 'express';
import cors from 'cors'
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', router);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
});