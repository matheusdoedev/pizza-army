import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    description: 'The product title',
    example: 'Calabresa',
  })
  title: string;

  @ApiProperty({
    description: 'The product description',
    example: 'Made of onion, cheese, mussarella, and tomato.',
  })
  description: string;

  @ApiProperty({
    description: 'The product price',
    example: 39.99,
  })
  price: number;
}
