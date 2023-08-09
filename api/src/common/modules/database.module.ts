import { Module } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const TYPEORM_CONFIG: TypeOrmModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    username: configService.get('database.username'),
    password: configService.get('database.password'),
    database: String(configService.get('database.database')),
    entities: configService.get('database.entities'),
    synchronize: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [TypeOrmModule.forRootAsync(TYPEORM_CONFIG)],
})
export class DatabaseModule {}
