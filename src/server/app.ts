import express from "express";
import morgan from "morgan";
import cors from "cors";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import { checkHealthStatus } from "./middlewares/checkHealthStatus.js";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import setCorsOptions from "./setCorsOptions.js";

const app = express();

app.use(morgan("dev"));

app.use(cors(setCorsOptions));

app.get("/", checkHealthStatus);

app.use("/monuments", monumentsRouter);

app.use(handleEndpointNotFound);

export default app;
