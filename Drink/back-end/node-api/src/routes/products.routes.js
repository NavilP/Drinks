import {Router} from 'express';
import {createProduct, getProducts, getProduct} from '../controllers/products.controllers.js';

const router = Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.post('/products', createProduct);

export default router