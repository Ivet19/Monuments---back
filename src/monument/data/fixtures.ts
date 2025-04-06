import Monument from "../Monument.js";

export const simpsonsHouse = new Monument(
  "Simpson's house",
  "A familiar house with a big garden where one of the most famous families of the world lives in",
  "http://simpsons.com/simpsonshouse.webp",
  { country: "USA", city: "Springfield" },
);
export const sagradaFamilia = new Monument(
  "Sagrada Familia",
  "A breathtaking basilica, blending Gothic and modernist architecture, still under construction",
  "http://sagradafamilia.com/sg.webp",
  { country: "Spain", city: "Barcelona" },
);

export const eiffelTower = new Monument(
  "Eiffel Tower",
  "A majestic iron lattice tower and global symbol of Parisian elegance and innovation",
  "https://eiffettower.com/image.webp",
  {
    city: "Paris",
    country: "France",
  },
);
