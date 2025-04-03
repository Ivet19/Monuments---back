import { MonumentStructure } from "../types.js";
import { MonumentControllerStructure } from "./types.js";
import { Request, Response } from "express";

class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };
}

export default MonumentController;
