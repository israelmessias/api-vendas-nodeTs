import { EntityRepository, Repository } from 'typeorm';
import Product from '../entity/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });
    return product;
  }
}
export default ProductRepository;
