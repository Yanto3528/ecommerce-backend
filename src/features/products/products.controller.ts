import slugify from "slugify";

import { catchAsync } from "@/utils/helpers";
import {
  CreateProductBodyPayload,
  UpdateProductBodyPayload,
} from "@/types/schema";

import * as productsService from "./products.service";

export const getProducts = catchAsync(async (req, res) => {
  const products = await productsService.findProducts();

  res.status(200).json({
    status: "success",
    data: products,
  });
});

export const getProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const product = await productsService.findProductById(Number(id));

  res.status(200).json({
    status: "success",
    data: product,
  });
});

export const addProduct = catchAsync<CreateProductBodyPayload>(
  async (req, res) => {
    const { name, description, imageUrl, price, quantity } = req.body;

    const product = await productsService.createProduct({
      name,
      description,
      imageUrl: imageUrl || [],
      price,
      quantity,
      slug: slugify(name, { lower: true }),
    });

    res.status(201).json({
      status: "success",
      data: product,
    });
  }
);

export const updateProduct = catchAsync<UpdateProductBodyPayload>(
  async (req, res) => {
    const {
      name,
      description,
      imageUrl,
      price,
      quantity,
      seoTitle,
      seoDescription,
      slug,
    } = req.body;
    const { id } = req.params;

    const product = await productsService.updateProduct(Number(id), {
      name,
      description,
      imageUrl,
      price,
      quantity,
      seoTitle,
      seoDescription,
      slug,
    });

    res.status(200).json({
      status: "success",
      data: product,
    });
  }
);

export const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  await productsService.deleteProduct(Number(id));

  res.status(200).json({
    status: "success",
    data: null,
  });
});
