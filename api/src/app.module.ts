import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule, globalConfig } from '@common';
import { ProductModule } from '@product';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const CONFIG_OPTIONS = {
  isGlobal: true,
  load: [globalConfig],
};

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS),
    DatabaseModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
