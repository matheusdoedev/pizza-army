import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { ProductDto } from '@product/dto/product.dto';
import { ProductServiceImpl } from '@product/service/impl/product.service';

@Controller('api/v1/products')
export class ProductController {
  constructor(private productService: ProductServiceImpl) {}

  @Get()
  async getProductList(
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    try {
      const products = await this.productService.listProducts();

      return res.status(HttpStatus.OK).json(products);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get(':productId')
  async getShowProduct(
    @Param('productId') productId: string,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    try {
      const product = await this.productService.showProduct(productId);

      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Post('create')
  postCreateProduct(
    @Res() res: Response,
    @Body() productDto: ProductDto,
  ): Response<unknown, Record<string, unknown>> {
    try {
      const product = this.productService.createProduct(productDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Product created', product });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Put('update/:productId')
  async putUpdateProduct(
    @Param('productId') productId: string,
    @Body() productDto: ProductDto,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    try {
      const product = await this.productService.updateProduct(
        productId,
        productDto,
      );

      return res
        .status(HttpStatus.OK)
        .json({ message: 'Product updated', product });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Delete('delete/:productId')
  async deleteProduct(
    @Param('productId') productId: string,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    try {
      await this.productService.deleteProduct(productId);

      return res.status(HttpStatus.OK).json({ message: 'Product deleted' });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }
}
