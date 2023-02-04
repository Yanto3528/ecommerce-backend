import express from "express";

import { requireAuth, validateBody } from "@/middlewares";
import {
  createCategorySchema,
  updateCategorySchema,
} from "@/schema/category.schema";

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
categoryRouter.put(
  "/:id",
  requireAuth("admin"),
  validateBody(updateCategorySchema),
  categoriesController.updateCategory
);
categoryRouter.delete(
  "/:id",
  requireAuth("admin"),
  categoriesController.deleteCategory
);

export { categoryRouter };
