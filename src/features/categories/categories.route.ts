import express from "express";

import { requireAuth, validateBody } from "@/middlewares";
import { createCategorySchema } from "@/schema/category.schema";

import * as categoriesController from "./categories.controller";

const categoryRouter = express.Router();

categoryRouter.get("/", categoriesController.getCategories);
categoryRouter.get("/:id", categoriesController.getCategory);
categoryRouter.post(
  "/",
  requireAuth("admin"),
  validateBody(createCategorySchema),
  categoriesController.addCategory
);

export { categoryRouter };
