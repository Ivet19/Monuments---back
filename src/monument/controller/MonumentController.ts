import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";
import { MonumentControllerStructure } from "./types.js";
import { Request, Response } from "express";

class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  public addMonument = (req: Request, res: Response): void => {
    const inputMonument = req.body as MonumentStructure;

    const returnedMonument = new Monument(
      inputMonument.name,
      inputMonument.description,
      inputMonument.imageUrl,
      { country: inputMonument.country, city: inputMonument.city },
    );

    if (
      this.monuments.some((monument) => monument.name === returnedMonument.name)
    ) {
      res.status(409).json({
        error: `Monument ${inputMonument.name} already exists. Please, choose a different one.`,
      });
      return;
    }

    this.monuments.push(returnedMonument);

    res.status(201).json(returnedMonument);
  };
}

export default MonumentController;
