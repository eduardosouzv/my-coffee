import { Router } from 'express';

import { registerUser } from '../controllers/UsersController';

const UserRouter = Router();

UserRouter.post('/register', registerUser);

export default UserRouter;
