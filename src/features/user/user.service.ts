import { IUser } from "@/types/user";

import * as userRepository from "./user.repository";

export const findUsers = async () => {
  return userRepository.findUsers();
};

export const findUserById = async (id: string) => {
  return userRepository.findUserById(id);
};

export const findUserByEmail = async (
  email: string,
  options: { includePassword: boolean } = { includePassword: false }
) => {
  const { includePassword } = options;

  return userRepository
    .findUserByEmail(email)
    .select(includePassword ? "+password" : "");
};

export const createUser = async (createUserInput: IUser) => {
  const user = userRepository.createUser(createUserInput);
  await user.save();

  return user;
};
