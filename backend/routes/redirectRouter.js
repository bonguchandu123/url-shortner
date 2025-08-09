
import express from 'express';
import { redirectUrl } from '../controllers/urlController.js';

const redirectRouter = express.Router();

redirectRouter.get('/:shortcode', redirectUrl);

export default redirectRouter;
