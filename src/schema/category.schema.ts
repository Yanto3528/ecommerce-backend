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
  backgroundImage: z
    .object({
      url: z.string({
        required_error: "Background image url is required",
      }),
      alt: z.string().optional(),
    })
    .optional(),
});

export const updateCategorySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  backgroundImage: z
    .object({
      url: z.string().optional(),
      alt: z.string().optional(),
    })
    .optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
    })
    .optional(),
  slug: z.string().optional(),
});
