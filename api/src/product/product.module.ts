import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductRepository } from './repository/product.repository';
import { ProductController } from './controller/product.controller';
import { ProductServiceImpl } from './service/impl/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [ProductController],
  providers: [ProductServiceImpl, ProductRepository],
  exports: [TypeOrmModule],
})
export class ProductModule {}
