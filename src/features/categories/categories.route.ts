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
  requireAuth("ADMIN"),
  validateBody(createCategorySchema),
  categoriesController.addCategory
);
categoryRouter.put(
  "/:id",
  requireAuth("ADMIN"),
  validateBody(updateCategorySchema),
  categoriesController.updateCategory
);
categoryRouter.delete(
  "/:id",
  requireAuth("ADMIN"),
  categoriesController.deleteCategory
);

export { categoryRouter };
