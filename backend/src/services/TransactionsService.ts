import TransactionsRepository from '../repositories/TransactionsRepository';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

interface Request {
  product_id: string;
  users_id: string;
}

export default class TransactionsService {
  async createTransaction({ product_id, users_id }: Request) {
    if (!product_id || !users_id) {
      throw new AppError('wrong received data', 401);
    }

    const repository = getCustomRepository(TransactionsRepository);

    const newTransaction = repository.create({
      products_id: product_id,
      users_id: users_id,
    });

    await repository.save(newTransaction);

    return newTransaction;
  }
}
