import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const routes = Router();

routes.use('/products', ProductsController);

export default routes;
