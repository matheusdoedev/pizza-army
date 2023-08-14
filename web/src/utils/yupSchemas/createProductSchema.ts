import { PRICE_REGEX } from "@/constants";
import * as yup from "yup";

export const createProductSchema = yup.object({
  title: yup.string().required("O título é obrigatório."),
  description: yup.string().required("A descrição é obrigatória."),
  price: yup.string().required("O preço é obrigatório").matches(PRICE_REGEX),
});
