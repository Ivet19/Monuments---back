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
    const monumentData = req.body as MonumentStructure;

    const newMonument = new Monument(
      monumentData.name,
      monumentData.description,
      monumentData.imageUrl,
      { country: monumentData.country, city: monumentData.city },
    );

    if (this.monuments.some((monument) => monument.name === newMonument.name)) {
      res.status(409).json({
        error: `Monument ${monumentData.name} already exists.`,
      });
      return;
    }

    this.monuments.push(newMonument);

    res.status(201).json(newMonument);
  };

  public deleteMonument = (req: Request, res: Response): void => {
    const monumentId = req.params.monumentId;

    const monumentToDelete = this.monuments.find(
      (monument) => monument.id === monumentId,
    );

    if (!monumentToDelete) {
      res.status(404).json({ error: "Monument not found" });
      return;
    }

    const monumentToDeleteIndex = this.monuments.findIndex(
      (monument) => monument.id === monumentId,
    );
    this.monuments.splice(monumentToDeleteIndex, 1);

    res.status(200).json(monumentToDelete);
  };
}

export default MonumentController;
