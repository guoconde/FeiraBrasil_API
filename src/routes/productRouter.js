import { Router } from 'express';
import { favoriteProduct, renderProducts } from '../controllers/productController.js';

const productRouter = Router();

productRouter.get('/', renderProducts);
productRouter.put('/produtos/:id', favoriteProduct)

export default productRouter;