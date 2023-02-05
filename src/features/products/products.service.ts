import { CreateProductDto } from "@/types/products";
import { DeepPartial } from "@/types/common";

import * as productsRepository from "./products.repository";

export const findProducts = () => {
  return productsRepository.findProducts();
};

export const findProductById = (id: number) => {
  return productsRepository.findProductById(id);
};

export const createProduct = async (createInput: CreateProductDto) => {
  const category = productsRepository.createProduct(createInput);

  return category;
};

export const updateProduct = (
  id: number,
  updateInput: DeepPartial<CreateProductDto>
) => {
  return productsRepository.updateProduct(id, updateInput);
};

export const deleteProduct = (id: number) => {
  return productsRepository.deleteProduct(id);
};
