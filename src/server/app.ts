import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import MonumentController from "../monument/controller/MonumentController.js";
import { monuments } from "../monument/data/monuments.js";
import { checkHealthStatus } from "./middlewares/checkHealthStatus.js";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

const monumentController = new MonumentController(monuments);

app.get("/monuments", monumentController.getMonuments);

app.use(handleEndpointNotFound);

export default app;
