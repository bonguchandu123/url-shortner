import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import apiRouter from './routes/urlRoutes.js';
import redirectRouter from './routes/redirectRouter.js';


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);


app.use('/', redirectRouter);


connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the URL Shortener API');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
