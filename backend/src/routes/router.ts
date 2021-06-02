import { Router } from 'express';

import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import SessionRouter from './SessionRouter';

const routes = Router();

routes.use('/products', ProductRouter);
routes.use('/user', UserRouter);
routes.use('/session', SessionRouter);

export default routes;
