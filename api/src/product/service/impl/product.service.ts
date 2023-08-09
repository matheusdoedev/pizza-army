import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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

    if (!title || !description || !price) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'Title, description, or price invalid',
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

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

    if (!product) {
      throw new NotFoundException();
    }
    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    product.save();

    return product;
  }

  async listProducts() {
    const products = await this.productRepository.getRepository().find();

    return products;
  }

  async showProduct(productId: string) {
    const product = await this.productRepository.getProductById(productId);

    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async deleteProduct(productId: string) {
    const product = await this.productRepository.getProductById(productId);

    if (!product) {
      throw new NotFoundException();
    }

    product.remove();
  }
}
