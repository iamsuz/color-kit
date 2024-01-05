import { identifyColor, hexToRgb } from "../src/identifyColor";
import { generateRandomColor } from "../src/randomColor";
import { Color } from "../statics/colors";

// Using identifyColor
const colorInfo = identifyColor("#FFFF33");

console.log(colorInfo); // "Closest Color Name"
console.log(colorInfo); // Distance if not an exact match

// Using hexToRgb
const rgb = hexToRgb("#FF5733");

console.log(rgb); // [255, 87, 51]

// Using generateRandomColor
const randomColor = generateRandomColor();
console.log(randomColor); // "#A1B2C3"

// Using Color interface
const exampleColor: Color = { hex: "#FFFFFF", name: "White" };
console.log({ exampleColor });
