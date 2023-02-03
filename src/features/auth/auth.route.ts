import express from "express";

import { validateBody } from "@/middlewares";
import * as authController from "./auth.controller";
import { signupBodySchema, loginBodySchema } from "@/schema/auth.schema";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(signupBodySchema),
  authController.signUp
);
authRouter.post("/login", validateBody(loginBodySchema), authController.login);

export { authRouter };
