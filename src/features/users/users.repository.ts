import { IUser } from "@/types/user";

import { User } from "./users.model";

export const findUsers = () => User.find();

export const findUserById = (id: string) => User.findById(id);

export const findUserByEmail = (email: string) => User.findOne({ email });

export const createUser = (createUserInput: IUser) => new User(createUserInput);
