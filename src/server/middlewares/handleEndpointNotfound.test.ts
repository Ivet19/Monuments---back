import { Request, Response } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound.js";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    test("Then it should call the recieved response's method status with 404", () => {
      const expectedStatusCode = 404;

      handleEndpointNotFound(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the recieved response's method json with 'Endpoint not found'", () => {
      const expectedError = { error: "Endpoint not found" };

      handleEndpointNotFound(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
