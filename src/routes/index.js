import { Router } from 'express';
import authRouter from './authRouter.js';
import productRouter from './productRouter.js';
import cartRouter from './cartRouter.js';
import userRouter from './userRouter.js';

const router = Router();
router.use(authRouter)
router.use(cartRouter)
router.use(userRouter)
router.use(productRouter)

export default router;