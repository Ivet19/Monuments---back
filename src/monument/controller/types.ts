import { Request, Response } from "express";

export interface MonumentControllerStructure {
  getMonuments: (req: Request, res: Response) => void;
  addMonument: (req: Request, res: Response) => void;
  deleteMonument: (req: Request, res: Response) => void;
}
