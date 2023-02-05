export type UserRole = "USER" | "ADMIN";

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}
