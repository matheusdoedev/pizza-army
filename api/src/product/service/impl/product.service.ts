import { Inject, Injectable } from '@nestjs/common';

import { ProductService } from '../product-service';
import { ProductRepository } from '@product/repository/product.repository';
import { ProductDto } from '@product/dto/product.dto';
import { Product } from '@product/model/product.model';

@Injectable()
export class ProductServiceImpl implements ProductService {
  constructor(
    @Inject(ProductRepository) private productRepository: ProductRepository,
  ) {}

  createProduct(productDto: ProductDto) {
    const { title, description, price } = productDto;
    const product = Product.create();

    product.title = title;
    product.description = description;
    product.price = price;
    product.save();

    return product;
  }

  async updateProduct(productId: string, productDto: ProductDto) {
    const { title, description, price } = productDto;
    const product = await this.productRepository.getProductById(productId);

    product.title = title;
    product.description = description;
    product.price = price;
    product.save();

    return product;
  }

  async listProducts() {
    const products = await this.productRepository.getRepository().find();

    return products;
  }

  showProduct(productId: string) {
    return this.productRepository.getProductById(productId);
  }

  async deleteProduct(productId: string) {
    const product = await this.productRepository.getProductById(productId);

    product.remove();
  }
}
