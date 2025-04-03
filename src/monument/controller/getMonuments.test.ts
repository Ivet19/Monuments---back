import { Request, Response } from "express";
import MonumentController from "./monumentController.js";
import Monument from "../Monument.js";

describe("Given the getMonuments function", () => {
  describe("When it receives a request asking for monuments and a response", () => {
    const simpsonsHouse = new Monument(
      "Simpson's house",
      "A familiar house with a big garden where one of the most famous families of the world lives in",
      "http://simpsons.com/simpsonshouse.webp",
      { country: "USA", city: "Springfield" },
    );
    const sagradaFamilia = new Monument(
      "Sagrada Familia",
      "A breathtaking basilica, blending Gothic and modernist architecture, still under construction",
      "http://sagradafamilia.com/sg.webp",
      { country: "Spain", city: "Barcelona" },
    );
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
