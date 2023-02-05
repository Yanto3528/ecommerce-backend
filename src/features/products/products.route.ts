import express from "express";

import { requireAuth, validateBody } from "@/middlewares";
import {
  createProductSchema,
  updateProductSchema,
} from "@/schema/product.schema";

import * as productsController from "./products.controller";

const productRouter = express.Router();

productRouter.get("/", productsController.getProducts);
productRouter.get("/:id", productsController.getProduct);
productRouter.post(
  "/",
  requireAuth("ADMIN"),
  validateBody(createProductSchema),
  productsController.addProduct
);
productRouter.put(
  "/:id",
  requireAuth("ADMIN"),
  validateBody(updateProductSchema),
  productsController.updateProduct
);
productRouter.delete(
  "/:id",
  requireAuth("ADMIN"),
  productsController.deleteProduct
);

export { productRouter };
