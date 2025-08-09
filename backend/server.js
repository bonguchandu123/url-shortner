import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import apiRouter from './routes/urlRoutes.js';
import redirectRouter from './routes/redirectRouter.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRouter);


app.use('/', redirectRouter);

// Connect to DB
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
