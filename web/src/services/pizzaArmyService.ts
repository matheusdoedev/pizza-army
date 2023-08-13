import { Product } from "@/interfaces";
import { fetchClient } from "@/providers";

const PRODUCTS_BASE_URL = "/products";

const pizzaArmyApi = fetchClient(import.meta.env.VITE_REST_API_URL);

export const pizzaArmyService = {
  getProducts() {
    return pizzaArmyApi.get<Product[]>(PRODUCTS_BASE_URL);
  },

  getProductById(productId: string) {
    return pizzaArmyApi.get<Product>(`${PRODUCTS_BASE_URL}/${productId}`);
  },
};
