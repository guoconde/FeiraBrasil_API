import { Router } from 'express';
import { sendEmail } from '../controllers/sendMailController.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const emailRouter = Router();

emailRouter.post('/sucesso', validateTokenMiddleware, sendEmail);

export default emailRouter;