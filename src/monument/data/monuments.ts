import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseum = new Monument(
  "Colosseum of Rome",
  "The Colosseum of Rome is an amphitheater from the Roman Empire time",
  "https://es.wikipedia.org/wiki/Coliseo#/media/Archivo:Roman_Colosseum_With_Moon.jpg",
  { country: "Italy", city: "Rome" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "A breathtaking white marble mausoleum symbolizing eternal love in Agra, India",
  "https://es.wikipedia.org/wiki/Taj_Mahal#/media/Archivo:Taj_Mahal_(Edited).jpeg",
  { country: "India", city: "Agra" },
);

const statueOfLiberty = new Monument(
  "Statue of Liberty",
  "A colossal symbol of freedom and democracy standing proudly in New York Harbor",
  "https://es.wikipedia.org/wiki/Estatua_de_la_Libertad#/media/Archivo:Statue_of_Liberty_7.jpg",
  { country: "USA", city: "New York" },
);

const alhambra = new Monument(
  "Alhambra",
  "A mesmerizing Moorish palace and fortress with intricate Islamic art in Granada, Spain",
  "https://unsplash.com/photos/9ZlZ2C8z5T4",
  { country: "Spain", city: "Granada" },
);

const bigBen = new Monument(
  "Big Ben",
  "An iconic clock tower marking London's skyline with its timeless chimes",
  "https://es.wikipedia.org/wiki/Big_Ben#/media/Archivo:Palace_of_Westminster,_London_-_Feb_2007.jpg",
  { country: "England", city: "London" },
);

export const monuments: MonumentStructure[] = [
  colosseum,
  tajMahal,
  statueOfLiberty,
  alhambra,
  bigBen,
];
