# Color Kit

A simple, yet powerful package for identifying and matching colors in JavaScript.

## Features

- **Color Matching**: Match a color to the closest predefined color in the palette.
- **Hex to RGB Conversion**: Convert any hex color code to RGB values.
- **Euclidean Distance**: Calculate the Euclidean distance between colors to determine the closest match.
- **Exact Match Detection**: Quickly find if a color exactly matches one from the predefined palette.

## Installation

To install `color-kit`, run the following command in your terminal:

```bash
npm install @iamsuz/color-kit
```

## Usage

### Importing the Package

```javascript
const { identifyColor } = require("@iamsuz/color-kit");
```

### Identifying a Color

You can pass a hex color code to the `identifyColor` function to get the closest match, color name, and more.

```javascript
const { inputColor, colorName, closestHex, exactMatch } =
  identifyColor("#DD4C22");
console.log(inputColor); // #DD4C22
console.log(colorName); // Name of the closest matching color
console.log(closestHex); // Closest hex color
console.log(exactMatch); // Boolean if exact match
```

### Example Output

```json
{
  "inputColor": "#DD4C22",
  "colorName": "Vivid Orange",
  "closestHex": "#DD4C22",
  "exactMatch": true
}
```

### Color Matching and RGB Conversion

- **Hex to RGB**: Convert hex colors to RGB format using the `rgb()` function.

```javascript
const rgb = rgb("#DD4C22");
console.log(rgb); // [221, 76, 34]
```

- **Euclidean Distance**: Calculate the Euclidean distance between two RGB colors to determine the closest match.

```javascript
const rgb1 = [221, 76, 34];
const rgb2 = [255, 255, 255];
const distance = calculateDistance(rgb1, rgb2);
console.log(distance); // Distance between two colors
```

## Contributing

We welcome contributions to improve the `@iamsuz/color-kit` package. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin feature-branch`).
5. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
