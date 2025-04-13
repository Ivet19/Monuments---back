import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseum = new Monument(
  "Colosseum of Rome",
  "The Colosseum of Rome is an amphitheater from the Roman Empire time.",
  "https://i.imgur.com/7Ye9NXS.jpg",
  { country: "Italy", city: "Rome" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "A breathtaking white marble mausoleum symbolizing eternal love in Agra, India.",
  "https://i.imgur.com/0uTFRnL.jpg",
  { country: "India", city: "Agra" },
);

const statueOfLiberty = new Monument(
  "Statue of Liberty",
  "A colossal symbol of freedom and democracy standing proudly in New York Harbor.",
  "https://i.imgur.com/SHYIzvl.jpg",
  { country: "USA", city: "New York" },
);

const alhambra = new Monument(
  "Alhambra",
  "A mesmerizing Moorish palace and fortress with intricate Islamic art.",
  "https://i.imgur.com/x8EbIYC.jpg",
  { country: "Spain", city: "Granada" },
);

const bigBen = new Monument(
  "Big Ben",
  "An iconic clock tower marking London's skyline with its timeless chimes.",
  "https://i.imgur.com/Z08QnwD.jpg",
  { country: "England", city: "London" },
);

export const monuments: MonumentStructure[] = [
  colosseum,
  tajMahal,
  statueOfLiberty,
  alhambra,
  bigBen,
];
