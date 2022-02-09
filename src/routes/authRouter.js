import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';

const authRouter = Router();

authRouter.post('/cadastrar', validateSchemaMiddleware, signUp);
authRouter.post('/entrar', validateSchemaMiddleware, signIn);

export default authRouter;