import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import UserRepository from '../repositories/UsersRepository';

interface IUser {
  user: string;
  password: string;
}

export default class UserService {
  async createNewUser({ user, password }: IUser) {
    if (typeof user !== 'string' || typeof password !== 'string') {
      throw new AppError('wrong data');
    }

    const repository = getCustomRepository(UserRepository);

    const newUser = repository.create({
      user,
      password,
    });

    await repository.save(newUser);

    return newUser.user;
  }
}
