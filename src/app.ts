// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { errorHandler } from "./middlewares";
import { userRouter } from "./features/users/users.route";
import { authRouter } from "./features/auth/auth.route";
import { categoryRouter } from "./features/categories/categories.route";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users/", userRouter);
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/categories/", categoryRouter);

app.use(errorHandler);

export { app };
