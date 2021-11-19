import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entity/User';
import UserRepository from '../typeorm/repository/UserRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const repository = getCustomRepository(UserRepository);

    const produtos = repository.find();

    return produtos;
  }
}

export default ListUserService;
