import { Router } from 'express';

import {
  getImageById,
  getAllProducts,
  getHotCoffes,
  getIceCoffes,
  getProductById,
} from '../controllers/ProductsController';

const ProductRouter = Router();

ProductRouter.get('/', getProductById);
ProductRouter.get('/all', getAllProducts);
ProductRouter.get('/photo', getImageById);
ProductRouter.get('/hot', getHotCoffes);
ProductRouter.get('/ice', getIceCoffes);

export default ProductRouter;
