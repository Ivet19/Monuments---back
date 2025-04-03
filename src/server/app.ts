import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import MonumentController from "../monument/controller/MonumentController.js";
import { monuments } from "../monument/data/monuments.js";

const app = express();

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({ message: "pong 🏓" });
});

const monumentController = new MonumentController(monuments);

app.get("/monuments", monumentController.getMonuments);

app.use(handleEndpointNotFound);

export default app;
