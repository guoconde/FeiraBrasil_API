import { Router } from 'express';
import { favoriteList, favoriteProduct, renderProducts } from '../controllers/productController.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const productRouter = Router();

productRouter.get('/', renderProducts);
productRouter.put('/produtos/:id', favoriteProduct)
productRouter.get('/favoritos', validateTokenMiddleware, favoriteList)

export default productRouter;