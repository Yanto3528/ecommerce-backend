export type UserRole = "user" | "admin";
export interface IUser {
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  password: string;
  role: UserRole;
}
