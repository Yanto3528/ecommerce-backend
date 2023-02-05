import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
  }),
  imageUrl: z.array(z.string()).optional(),
});

export const updateProductSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .optional(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .optional(),
  price: z
    .number({
      required_error: "Price is required",
    })
    .optional(),
  quantity: z
    .number({
      required_error: "Quantity is required",
    })
    .optional(),
  imageUrl: z.array(z.string()).optional(),
  slug: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
