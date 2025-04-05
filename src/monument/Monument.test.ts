import Monument from "./Monument.js";

describe("Given the Eiffel Tower", () => {
  describe("When it is instanciated", () => {
    test("Then it should indicate that is placed in Paris", () => {
      const eiffelTower = new Monument("", "", "", {
        city: "Paris",
        country: "",
      });
      const expectedCity = "Paris";

      const actualCity = eiffelTower.city;

      expect(actualCity).toBe(expectedCity);
    });

    test("Then it should indicate that is placed in France", () => {
      const eiffelTower = new Monument("", "", "", {
        city: "",
        country: "France",
      });
      const expectedCountry = "France";

      const actualCountry = eiffelTower.country;

      expect(actualCountry).toBe(expectedCountry);
    });

    test("Then it should be called 'Eiffel Tower'", () => {
      const eiffelTower = new Monument("Eiffel Tower", "", "", {
        city: "",
        country: "",
      });
      const expectedName = "Eiffel Tower";

      const actualName = eiffelTower.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should be described as 'A majestic iron lattice tower and global symbol of Parisian elegance and innovation'", () => {
      const eiffelTower = new Monument(
        "",
        "A majestic iron lattice tower and global symbol of Parisian elegance and innovation",
        "",
        { city: "", country: "" },
      );
      const expectedDescription =
        "A majestic iron lattice tower and global symbol of Parisian elegance and innovation";

      const actualDescription = eiffelTower.description;

      expect(actualDescription).toBe(expectedDescription);
    });
  });
});
