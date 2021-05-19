import { Router } from 'express';

import ProductRouter from './ProductRouter';

const routes = Router();

routes.use('/products', ProductRouter);

export default routes;
