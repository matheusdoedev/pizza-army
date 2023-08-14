import { Product, SelectOption } from "@/interfaces";

export const serializeProductsDataInSelectOptions = (
  productsData: Product[]
): SelectOption[] => {
  return productsData.map(({ title, id }) => ({
    label: title,
    value: id,
  }));
};
