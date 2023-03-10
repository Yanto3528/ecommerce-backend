import bcrypt from "bcrypt";

import { catchAsync } from "@/utils/helpers";
import { SignUpBodyPayload, LoginBodyPayload } from "@/types/schema";
import { BadRequestError } from "@/errors";

import * as userService from "../users/users.service";

import { createAndSendToken, matchPassword } from "./auth.helper";

export const signUp = catchAsync<SignUpBodyPayload>(async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  const existingUser = await userService.findUserByEmail(email);
  if (existingUser) {
    throw new BadRequestError("User with this email already exist.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userService.createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: "USER",
  });

  createAndSendToken(user.id, res, 201);
});

export const login = catchAsync<LoginBodyPayload>(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await userService.findUserByEmail(email, {
    includePassword: true,
  });
  if (!existingUser) {
    throw new BadRequestError("Invalid credentials");
  }

  const isPasswordMatch = await matchPassword(password, existingUser.password!);
  if (!isPasswordMatch) {
    throw new BadRequestError("Invalid credentials");
  }

  createAndSendToken(existingUser.id, res);
});
