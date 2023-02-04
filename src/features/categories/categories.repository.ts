import { ICategory } from "@/types/categories";
import { DeepPartial } from "@/types/common";

import { Category } from "./categories.model";

export const findCategories = () => Category.find();
export const findCategoryById = (id: string) => Category.findById(id);
export const createCategory = (createInput: ICategory) =>
  new Category(createInput);

export const updateCategory = (
  id: string,
  updateInput: DeepPartial<ICategory>
) => Category.findByIdAndUpdate(id, updateInput, { new: true });

export const deleteCategory = (id: string) => Category.findByIdAndDelete(id);
