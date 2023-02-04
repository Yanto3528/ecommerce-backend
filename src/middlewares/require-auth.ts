/* eslint-disable @typescript-eslint/no-namespace */
import jwt from "jsonwebtoken";
import { Document } from "mongoose";

import { User } from "@/features/users/users.model";
import { catchAsync } from "@/utils/helpers";
import { ForbiddenError, NotAuthorizedError } from "@/errors";
import { UserRole, IUser } from "@/types/user";

const jwtSecret = process.env.JWT_SECRET || "";

interface JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    export interface Request {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      user: Document<any, any, IUser>;
    }
  }
}

export const requireAuth = (requiredRole: UserRole = "user") =>
  catchAsync(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(
        new NotAuthorizedError("You are not logged in. Please login to access.")
      );
    }

    const decoded = (await jwt.verify(token, jwtSecret)) as JwtPayload;
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(
        new NotAuthorizedError("User belonging to this token no longer exists")
      );
    }

    req.user = user;
    if (user.role === "user" && requiredRole === "admin") {
      return next(new ForbiddenError());
    }

    next();
  });
