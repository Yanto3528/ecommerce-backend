import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";

dotenv.config();

import { errorHandler } from "./middlewares";
import { userRouter } from "./features/user/user.route";
import { authRouter } from "./features/auth/auth.route";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users/", userRouter);
app.use("/api/v1/auth/", authRouter);

app.use(errorHandler);

export { app };
