import { Router } from 'express';
import { signUp } from '../controllers/authController.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';

const authRouter = Router();

authRouter.post('/cadastrar', validateSchemaMiddleware, signUp);

export default authRouter;