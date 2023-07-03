import { Router } from 'express';
import productController from '../controllers/ProductsController';

const { postProduct, getProducts } = productController;

const router = Router();

router.post('/', postProduct);
router.get('/', getProducts);

export default router;