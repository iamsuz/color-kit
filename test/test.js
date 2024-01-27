"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identifyColor_1 = require("../src/identifyColor");
var randomColor_1 = require("../types/randomColor");
// Using identifyColor
var colorInfo = (0, identifyColor_1.identifyColor)("#FF5733");
console.log(colorInfo); // "Closest Color Name"
console.log(colorInfo.distance); // Distance if not an exact match
// Using hexToRgb
var rgb = (0, identifyColor_1.hexToRgb)("#FF5733");
console.log(rgb); // [255, 87, 51]
// Using generateRandomColor
var randomColor = (0, randomColor_1.generateRandomColor)();
console.log(randomColor); // "#A1B2C3"
// Using Color interface
var exampleColor = { hex: "#FFFFFF", name: "White" };
console.log(exampleColor);
