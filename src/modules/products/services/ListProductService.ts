import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entity/Product';
import ProductRepository from '../typeorm/repository/ProductRespository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const repository = getCustomRepository(ProductRepository);

    const products = repository.find();

    return products;
  }
}

export default ListProductService;
