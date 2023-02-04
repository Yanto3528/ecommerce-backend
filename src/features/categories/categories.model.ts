import { Schema, model } from "mongoose";

import { ICategory } from "@/types/categories";

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    backgroundImage: {
      url: String,
      alt: String,
      required: false,
    },
    seo: {
      title: String,
      description: String,
      required: false,
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: true,
  }
);

export const Category = model<ICategory>("Category", CategorySchema);
