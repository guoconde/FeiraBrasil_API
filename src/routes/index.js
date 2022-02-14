import { Router } from 'express';
import authRouter from './authRouter.js';
import productRouter from './productRouter.js';
import cartRouter from './cartRouter.js';
import userRouter from './userRouter.js';
import emailRouter from './emailRouter.js';

const router = Router();
router.use(authRouter)
router.use(cartRouter)
router.use(userRouter)
router.use(productRouter)
router.use(emailRouter)

export default router;