import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseum = new Monument(
  "Colosseum of Rome",
  "The Colosseum of Rome is an amphitheater from the Roman Empire time",
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Roman_Colosseum_With_Moon.jpg",
  { country: "Italy", city: "Rome" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "A breathtaking white marble mausoleum symbolizing eternal love in Agra, India",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/2560px-Taj_Mahal_%28Edited%29.jpeg",
  { country: "India", city: "Agra" },
);

const statueOfLiberty = new Monument(
  "Statue of Liberty",
  "A colossal symbol of freedom and democracy standing proudly in New York Harbor",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg",
  { country: "USA", city: "New York" },
);

const alhambra = new Monument(
  "Alhambra",
  "A mesmerizing Moorish palace and fortress with intricate Islamic art in Granada, Spain",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/2560px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
  { country: "Spain", city: "Granada" },
);

const bigBen = new Monument(
  "Big Ben",
  "An iconic clock tower marking London's skyline with its timeless chimes",
  "https://statics.getnofilter.com/photos/regular/ef0d6b06-e455-4b0a-ad5f-c88769c6bc9c.webp",
  { country: "England", city: "London" },
);

export const monuments: MonumentStructure[] = [
  colosseum,
  tajMahal,
  statueOfLiberty,
  alhambra,
  bigBen,
];
