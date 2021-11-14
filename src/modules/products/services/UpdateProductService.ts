import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entity/Product';
import ProductRepository from '../typeorm/repository/ProductRespository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const repository = getCustomRepository(ProductRepository);

    const product = await repository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    const productExists = await repository.findByName(name);

    if (productExists) {
      throw new AppError('Já existe um produto com esse nome');
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    return product;
  }
}
