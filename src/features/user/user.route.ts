import express from "express";

import * as userController from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUserById);

export { userRouter };
