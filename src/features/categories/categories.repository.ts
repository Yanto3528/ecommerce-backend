import { prisma } from "@/lib/prisma";
import { CreateCategoryDto } from "@/types/categories";
import { DeepPartial } from "@/types/common";

export const findCategories = () => {
  return prisma.category.findMany();
};

export const findCategoryById = (id: number) => {
  return prisma.category.findFirst({ where: { id } });
};

export const createCategory = async (createInput: CreateCategoryDto) => {
  const category = await prisma.category.create({
    data: createInput,
  });

  return category;
};

export const updateCategory = async (
  id: number,
  updateInput: DeepPartial<CreateCategoryDto>
) => {
  const updatedCategory = await prisma.category.update({
    where: {
      id,
    },
    data: updateInput,
  });

  return updatedCategory;
};

export const deleteCategory = (id: number) => {
  return prisma.category.delete({
    where: { id },
  });
};
