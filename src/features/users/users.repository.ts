import { CreateUserDto } from "@/types/user";
import { prisma } from "@/lib/prisma";

export const findUsers = () => {
  return prisma.user.findMany();
};

export const findUserById = (id: number) => {
  return prisma.user.findFirst({ where: { id } });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const createUser = async (createUserInput: CreateUserDto) => {
  const user = await prisma.user.create({
    data: createUserInput,
  });

  return user;
};
