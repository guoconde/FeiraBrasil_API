import { Router } from 'express';
import { deleteProduct, userCart } from '../controllers/cartController.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const cartRouter = Router();

cartRouter.get('/carrinho', validateTokenMiddleware, userCart);
cartRouter.delete('/carrinho/:id', validateTokenMiddleware, deleteProduct);

export default cartRouter;