import { Router } from 'express';
import { infoUser, saveInfo } from '../controllers/userController.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const userRouter = Router();

userRouter.get('/pagamento', validateTokenMiddleware, infoUser);
userRouter.post('/informacoes', validateSchemaMiddleware, validateTokenMiddleware, saveInfo);

export default userRouter;