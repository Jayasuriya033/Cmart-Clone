import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router/router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  credentials: true
}));


app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
