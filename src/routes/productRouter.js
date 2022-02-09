import { Router } from 'express';
import { renderProducts } from '../controllers/productController.js';

const productRouter = Router();

productRouter.get('/', renderProducts);

export default productRouter;