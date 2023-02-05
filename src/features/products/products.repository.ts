import slugify from "slugify";

import { prisma } from "@/lib/prisma";
import { CreateProductDto } from "@/types/products";
import { DeepPartial } from "@/types/common";

export const findProducts = () => {
  return prisma.product.findMany();
};

export const findProductById = (id: number) => {
  return prisma.product.findFirst({ where: { id } });
};

export const createProduct = async (createInput: CreateProductDto) => {
  const product = await prisma.product.create({
    data: {
      ...createInput,
      category: {
        connectOrCreate: {
          create: {
            name: "Default category",
            description: "",
            slug: slugify("Default category", { lower: true }),
          },
          where: {
            slug: "default-category",
          },
        },
      },
    },
  });

  return product;
};

export const updateProduct = async (
  id: number,
  updateInput: DeepPartial<CreateProductDto>
) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id,
    },
    data: updateInput,
  });

  return updatedProduct;
};

export const deleteProduct = (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};
