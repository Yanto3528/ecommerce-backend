import { ICategory } from "@/types/categories";
import { DeepPartial } from "@/types/common";

import * as categoriesRepository from "./categories.repository";

export const findCategories = () => {
  return categoriesRepository.findCategories();
};

export const findCategoryById = (id: string) => {
  return categoriesRepository.findCategoryById(id);
};

export const createCategory = async (createInput: ICategory) => {
  const category = categoriesRepository.createCategory(createInput);
  await category.save();

  return category;
};

export const updateCategory = (
  id: string,
  updateInput: DeepPartial<ICategory>
) => {
  return categoriesRepository.updateCategory(id, updateInput);
};

export const deleteCategory = (id: string) => {
  return categoriesRepository.deleteCategory(id);
};
