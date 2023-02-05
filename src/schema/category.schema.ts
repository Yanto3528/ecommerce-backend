import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  description: z
    .string({
      invalid_type_error: "Description must be a string",
    })
    .optional(),
  backgroundImageUrl: z.string().optional(),
  backgroundImageAlt: z.string().optional(),
});

export const updateCategorySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  backgroundImageUrl: z.string().optional(),
  backgroundImageAlt: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  slug: z.string().optional(),
});
