import slugify from "slugify";

import { catchAsync } from "@/utils/helpers";
import { CreateCategoryBodyPayload } from "@/types/schema";

import * as categoriesService from "./categories.service";

export const getCategories = catchAsync(async (req, res) => {
  const categories = await categoriesService.findCategories();

  res.status(200).json({
    status: "success",
    data: categories,
  });
});

export const getCategory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await categoriesService.findCategoryById(id);

  res.status(200).json({
    status: "success",
    data: category,
  });
});

export const addCategory = catchAsync<CreateCategoryBodyPayload>(
  async (req, res) => {
    const { name, description, backgroundImage } = req.body;

    const category = await categoriesService.createCategory({
      name,
      description,
      backgroundImage,
      slug: slugify(name, { lower: true }),
    });

    res.status(201).json({
      status: "success",
      data: category,
    });
  }
);
