import { IUser } from "@/types/user";

import { User } from "./user.model";

export const findUsers = () => {
  return User.find();
};

export const findUserById = (id: string) => {
  return User.findById(id);
};

export const findUserByEmail = (email: string) => {
  return User.findOne({ email });
};

export const createUser = (createUserInput: IUser) => {
  return new User(createUserInput);
};
