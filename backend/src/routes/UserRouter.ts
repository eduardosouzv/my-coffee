import { Router } from 'express';

import { createUser } from '../controllers/UsersController';

const UserRouter = Router();

UserRouter.post('/create', createUser);

export default UserRouter;
