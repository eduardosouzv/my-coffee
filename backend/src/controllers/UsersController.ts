import { NextFunction, Request, Response } from 'express';

import UserService from '../services/UserService';
import asyncHandler from 'express-async-handler';

export const createUser = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { user, password } = request.body;

    try {
      const createdUser = await new UserService().createNewUser({ user, password });
      response.status(201).json({
        message: `user ${createdUser} created`,
      });
    } catch (err) {
      next(err);
    }
  },
);
