import { z } from "zod";

import { signupBodySchema, loginBodySchema } from "@/schema/auth.schema";
import {
  createCategorySchema,
  updateCategorySchema,
} from "@/schema/category.schema";

// Auth
export type SignUpBodyPayload = z.infer<typeof signupBodySchema>;
export type LoginBodyPayload = z.infer<typeof loginBodySchema>;

// Category
export type CreateCategoryBodyPayload = z.infer<typeof createCategorySchema>;
export type UpdateCategoryBodyPayload = z.infer<typeof updateCategorySchema>;
