import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repository/ProductRespository';

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const repository = getCustomRepository(ProductRepository);

    const product = await repository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    await repository.remove(product);
  }
}

export default DeleteProductService;
