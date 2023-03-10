import { catchAsync } from "@/utils/helpers";

import * as userService from "./users.service";

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await userService.findUsers();

  res.status(200).json({
    status: "success",
    data: users,
  });
});

export const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const user = await userService.findUserById(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
});
