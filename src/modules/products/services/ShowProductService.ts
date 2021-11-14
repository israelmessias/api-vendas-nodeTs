import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entity/Product';
import ProductRepository from '../typeorm/repository/ProductRespository';

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const repository = getCustomRepository(ProductRepository);

    const product = repository.findOne(id);

    if (!product) {
      throw new AppError('Produto não existe.');
    }

    return product;
  }
}

export default ShowProductService;
