import { z } from "zod";

import { signupBodySchema, loginBodySchema } from "@/schema/auth.schema";
import {
  createCategorySchema,
  updateCategorySchema,
} from "@/schema/category.schema";
import {
  createProductSchema,
  updateProductSchema,
} from "@/schema/product.schema";

// Auth
export type SignUpBodyPayload = z.infer<typeof signupBodySchema>;
export type LoginBodyPayload = z.infer<typeof loginBodySchema>;

// Category
export type CreateCategoryBodyPayload = z.infer<typeof createCategorySchema>;
export type UpdateCategoryBodyPayload = z.infer<typeof updateCategorySchema>;

// Product
export type CreateProductBodyPayload = z.infer<typeof createProductSchema>;
export type UpdateProductBodyPayload = z.infer<typeof updateProductSchema>;
