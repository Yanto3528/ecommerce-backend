import { CreateUserDto } from "@/types/user";

import * as userRepository from "./users.repository";

export const findUsers = async () => userRepository.findUsers();

export const findUserById = async (id: number) =>
  userRepository.findUserById(id);

export const findUserByEmail = async (
  email: string,
  options: { includePassword: boolean } = { includePassword: false }
) => {
  const { includePassword } = options;

  const user = await userRepository.findUserByEmail(email);

  return user
    ? { ...user, password: includePassword ? user.password : undefined }
    : null;
};

export const createUser = async (createUserInput: CreateUserDto) => {
  const user = userRepository.createUser(createUserInput);

  return user;
};
