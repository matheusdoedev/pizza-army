import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Product } from '@product';

interface GlobalConfiguration {
  database: TypeOrmModuleOptions;
}

export default (): GlobalConfiguration => ({
  database: {
    url: process.env.DB_URL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Product],
    extra: {
      ssl: {
        rejectUnauthorized:
          process.env.NODE_ENV === 'production' ? false : true,
      },
    },
  },
});
