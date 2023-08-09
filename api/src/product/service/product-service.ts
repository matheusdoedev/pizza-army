import { ProductDto } from '@product/dto/product.dto';
import { Product } from '@product/model/product.model';

export interface ProductService {
  createProduct: (product: ProductDto) => Product;
  updateProduct: (
    productId: string,
    productDto: ProductDto,
  ) => Promise<Product>;
  deleteProduct: (productId: string) => void;
  listProducts: () => Promise<Product[]>;
  showProduct: (productId: string) => Promise<Product>;
}
