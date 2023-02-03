import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { IUser } from "@/types/user";

const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
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

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = model<IUser>("User", UserSchema);
