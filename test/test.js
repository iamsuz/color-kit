const { generateRandomColor, identifyColor } = require("../src");

const rc = generateRandomColor();

const testColor = "#FF5733";
const identified = identifyColor(testColor);

const newRandomColor = identifyColor(rc)
console.log(`Identified Color for ${testColor}:`, identified);
console.log(`Random Color generated ${rc}`, `\n Identified Color for`, newRandomColor)