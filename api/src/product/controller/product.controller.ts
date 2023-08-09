import {
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
    const products = await this.productService.listProducts();

    return res.status(HttpStatus.OK).json(products);
  }

  @Get(':productId')
  async getShowProduct(
    @Param('productId') productId: string,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    const product = await this.productService.showProduct(productId);

    return res.status(HttpStatus.OK).json(product);
  }

  @Post('create')
  postCreateProduct(
    @Res() res: Response,
    @Body() productDto: ProductDto,
  ): Response<unknown, Record<string, unknown>> {
    const product = this.productService.createProduct(productDto);

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Product created', product });
  }

  @Put('update/:productId')
  async putUpdateProduct(
    @Param('productId') productId: string,
    @Body() productDto: ProductDto,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    const product = await this.productService.updateProduct(
      productId,
      productDto,
    );

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product updated', product });
  }

  @Delete('delete/:productId')
  async deleteProduct(
    @Param('productId') productId: string,
    @Res() res: Response,
  ): Promise<Response<unknown, Record<string, unknown>> | string> {
    await this.productService.deleteProduct(productId);

    return res.status(HttpStatus.OK).json({ message: 'Product deleted' });
  }
}
