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
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotAcceptableResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

import { ProductDto } from '@product/dto/product.dto';
import { ProductServiceImpl } from '@product/service/impl/product.service';

@ApiTags('products')
@Controller('api/v1/products')
export class ProductController {
  constructor(private productService: ProductServiceImpl) {}

  @Get()
  @ApiOkResponse({
    description: 'The products has been successfully listed.',
  })
  @ApiBadRequestResponse({
    description: 'It was some problem in products query.',
  })
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
  @ApiParam({ type: '', name: 'productId' })
  @ApiOkResponse({ description: 'Product succesfully found.' })
  @ApiNotFoundResponse({ description: 'Product not found.' })
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
  @ApiBody({ type: ProductDto })
  @ApiCreatedResponse({ description: 'Product created' })
  @ApiNotAcceptableResponse({
    description: 'Title, description, or price invalid',
  })
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
  @ApiParam({ type: '', name: 'productId' })
  @ApiBody({ type: ProductDto })
  @ApiCreatedResponse({ description: 'Product updated.' })
  @ApiNotFoundResponse({ description: 'Product not found.' })
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
        .status(HttpStatus.CREATED)
        .json({ message: 'Product updated', product });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Delete('delete/:productId')
  @ApiParam({ type: '', name: 'productId' })
  @ApiOkResponse({ description: 'Product deleted.' })
  @ApiNotFoundResponse({ description: 'Product not found.' })
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
