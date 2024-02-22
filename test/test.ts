import { identifyColor, hexToRgb } from "../src/identifyColor";
import { generateRandomColor } from "../types/randomColor";
import { Color } from "../types/colors";

// Using identifyColor
const colorInfo = identifyColor("#FFFF33");

console.log(colorInfo); //
console.log(colorInfo.distance); // Distance if not an exact match
console.log(colorInfo.colorName); // "Closest Color Name"

// Using hexToRgb
const rgb = hexToRgb("#FF5733");

console.log(rgb); // [255, 87, 51]

// Using generateRandomColor
const randomColor = generateRandomColor();
console.log(randomColor); // "#A1B2C3"

// Using Color interface
const exampleColor: Color = { hex: "#FFFFFF", name: "White" };
console.log(exampleColor);
