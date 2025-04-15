import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import Monument from "../../Monument.js";
import {
  simpsonsHouse,
  sagradaFamilia,
  eiffelTower,
} from "../../data/fixtures.js";

describe("Given the deleteMonument function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let monuments: Monument[];
  let monumentController: MonumentController;

  beforeEach(() => {
    monuments = [simpsonsHouse, sagradaFamilia];
    monumentController = new MonumentController(monuments);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Simpson's house id that already exists", () => {
    const req = {
      params: { monumentId: simpsonsHouse.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with a monument named 'Simpson's house'", () => {
      const { name } = simpsonsHouse;

      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then Simpson's house should not be in the monuments array", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(monuments).not.toContain(simpsonsHouse);
    });
  });

  describe("When it receives a request with Eiffel Tower id and the monument doesn't exist", () => {
    const req = {
      params: { monumentId: eiffelTower.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the received response's method json with a 'Monument not found' error", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Monument not found",
      });
    });
  });
});
