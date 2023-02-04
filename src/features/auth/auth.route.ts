import express from "express";

import { validateBody } from "@/middlewares";
import { signupBodySchema, loginBodySchema } from "@/schema/auth.schema";

import * as authController from "./auth.controller";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(signupBodySchema),
  authController.signUp
);
authRouter.post("/login", validateBody(loginBodySchema), authController.login);

export { authRouter };
