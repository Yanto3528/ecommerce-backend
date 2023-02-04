import { IUser } from "@/types/user";

import * as userService from "../user/user.service";

export const signUp = async (createUserInput: IUser) => {
  const user = await userService.createUser(createUserInput);

  return user;
};
