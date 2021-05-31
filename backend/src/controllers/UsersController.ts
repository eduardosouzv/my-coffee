import { Request, Response } from 'express';

import UserService from '../services/UserService';

export const createUser = async (request: Request, response: Response) => {
  const { user, password } = request.body;

  const service = new UserService().createNewUser({ user, password });

  service.then(res =>
    response.json({
      message: `user ${res} created`,
    }),
  );
};
