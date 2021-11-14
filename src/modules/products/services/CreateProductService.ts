import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entity/Product';
import ProductRepository from '../typeorm/repository/ProductRespository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const repository = getCustomRepository(ProductRepository);
    //Se ja existe um produto ele lança a execeção productExists
    const productExists = await repository.findByName(name);

    if (productExists) {
      throw new AppError('Já existe um produto com esse nome');
    }

    //cria um produto com name, price, quantity
    const product = repository.create({
      name,
      price,
      quantity,
    });

    //
    await repository.save(product);

    return product;
  }
}

export default CreateProductService;
