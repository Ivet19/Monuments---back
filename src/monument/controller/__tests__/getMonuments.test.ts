import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import { simpsonsHouse, sagradaFamilia } from "../../data/fixtures.js";

describe("Given the getMonuments function", () => {
  describe("When it receives a request asking for monuments and a response", () => {
    const monuments = [simpsonsHouse, sagradaFamilia];

    const monumentController = new MonumentController(monuments);

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status 200", () => {
      const expectedStatusCode = 200;

      monumentController.getMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with simpson's house and Sagrada Familia", () => {
      const expectedMonuments = {
        monuments: [simpsonsHouse, sagradaFamilia],
      };

      monumentController.getMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMonuments);
    });
  });
});
