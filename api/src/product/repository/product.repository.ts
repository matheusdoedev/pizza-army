import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Product } from '@product/model/product.model';

@Injectable()
export class ProductRepository {
  private repository: Repository<Product>;

  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Product);
  }

  getRepository() {
    return this.repository;
  }

  getProductById(productId: string) {
    return this.repository.findOne({
      where: { id: productId },
    });
  }
}
