import { Router } from 'express';
import { confirmPurchase, deleteProduct, postCart, userCart } from '../controllers/cartController.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const cartRouter = Router();

cartRouter.get('/carrinho', validateTokenMiddleware, userCart);
cartRouter.post('/carrinho', validateTokenMiddleware, postCart);
cartRouter.delete('/carrinho/:id', validateTokenMiddleware, deleteProduct);
cartRouter.post('/pagamento', validateSchemaMiddleware, validateTokenMiddleware, confirmPurchase);

export default cartRouter;