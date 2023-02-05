import { CreateCategoryDto } from "@/types/categories";
import { DeepPartial } from "@/types/common";

import * as categoriesRepository from "./categories.repository";

export const findCategories = () => {
  return categoriesRepository.findCategories();
};

export const findCategoryById = (id: number) => {
  return categoriesRepository.findCategoryById(id);
};

export const createCategory = async (createInput: CreateCategoryDto) => {
  const category = categoriesRepository.createCategory(createInput);

  return category;
};

export const updateCategory = (
  id: number,
  updateInput: DeepPartial<CreateCategoryDto>
) => {
  return categoriesRepository.updateCategory(id, updateInput);
};

export const deleteCategory = (id: number) => {
  return categoriesRepository.deleteCategory(id);
};
