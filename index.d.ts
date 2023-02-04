// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from "mongoose";

import { IUser } from "./src/types/user";

declare global {
  namespace Express {
    export interface Request {
      user: Document<any, any, IUser>;
    }
  }
}

export {};
