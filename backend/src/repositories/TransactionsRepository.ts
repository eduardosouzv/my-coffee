import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

@EntityRepository(Transaction)
export default class TransactionRepository extends Repository<Transaction> {}
