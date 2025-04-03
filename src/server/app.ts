import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import MonumentController from "../monument/controller/monumentController.js";
import { monuments } from "../monument/data/monuments.js";

const app = express();

app.use(morgan("dev"));

const monumentController = new MonumentController(monuments);

app.get("/monuments", monumentController.getMonuments);

app.use(handleEndpointNotFound);

export default app;
