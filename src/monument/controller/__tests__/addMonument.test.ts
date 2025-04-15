import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import {
  simpsonsHouse,
  sagradaFamilia,
  eiffelTower,
} from "../../data/fixtures.js";

describe("Given the addMonument method", () => {
  let monuments = [simpsonsHouse, sagradaFamilia];

  let monumentController = new MonumentController(monuments);

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    jest.clearAllMocks();
    monuments = [simpsonsHouse, sagradaFamilia];
    monumentController = new MonumentController(monuments);
  });

  describe("When it receives a request with the Eiffel Tower", () => {
    const req = {
      body: eiffelTower,
    } as Pick<Request, "body">;

    test("Then it should call the response's status method with status 201", () => {
      const expectedStatusCode = 201;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method containing a monument with the name Eiffel Tower", () => {
      const { name } = eiffelTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then it should call the response's json method containing a monument described as 'A majestic iron lattice tower and global symbol of Parisian elegance and innovation'", () => {
      const { description } = eiffelTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ description }),
      );
    });

    test("Then it should call the response's json method containing a monument placed at París, France", () => {
      const { city, country } = eiffelTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ city, country }),
      );
    });
  });

  describe("When it receives a request with Sagrada Familia", () => {
    const req = {
      body: sagradaFamilia,
    } as Pick<Request, "body">;

    test("Then it should call the response's method status with 409", () => {
      const expectedStatusCode = 409;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method jason with message 'Monument Sagrada Familia already exists.'", () => {
      const expectedErrorMessage = {
        error: "Monument Sagrada Familia already exists.",
      };

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
