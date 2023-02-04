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
