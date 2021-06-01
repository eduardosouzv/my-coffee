import { NextFunction, Request, Response } from 'express';

import UserService from '../services/UserService';
const asyncHandler = require('express-async-handler');

export const createUser = asyncHandler(
  (request: Request, response: Response, next: NextFunction) => {
    const { user, password } = request.body;

    const service = new UserService().createNewUser({ user, password });

    service
      .then(res =>
        response.json({
          message: `user ${res} created`,
        }),
      )
      .catch(err => next(err));
  },
);
