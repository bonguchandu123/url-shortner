
import express from 'express';
import { shortenUrl, listUrls, deleteUrlById } from '../controllers/urlController.js';
import validateUrl from '../middleware/validateUrl.js';

const apiRouter = express.Router();

apiRouter.post('/shorten', validateUrl, shortenUrl);
apiRouter.get('/list', listUrls);
apiRouter.delete('/url/:id', deleteUrlById);
export default apiRouter