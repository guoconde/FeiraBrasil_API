import { Router } from 'express';
import authRouter from './authRouter.js';
import cartRouter from './cartRouter.js';
import userRouter from './userAuth.js';

const router = Router();
router.use(authRouter)
router.use(cartRouter)
router.use(userRouter)

export default router;