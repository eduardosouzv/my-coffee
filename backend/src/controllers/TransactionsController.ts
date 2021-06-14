import { NextFunction, Request, Response } from 'express';

import asyncHandler from 'express-async-handler';

import TransactionsService from '../services/TransactionsService';

export const createTransaction = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { product_id, users_id } = request.body;

      const transactionCreated = await new TransactionsService().createTransaction({
        product_id,
        users_id,
      });

      response.status(201).json({
        created: transactionCreated,
      });
    } catch (err) {
      next(err);
    }
  },
);
