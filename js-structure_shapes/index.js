console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";

const root = document.getElementById("root");

// Circle
const circleElement = Circle();

// Square
const squareElement = Square();

// Pentagon
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
