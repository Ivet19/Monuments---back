import { Request, Response } from "express";

export interface MonumentControllerStructure {
  getMonuments: (req: Request, res: Response) => void;
}
