const colors = require("../statics/colors");

const ic = {
	name: function (color) {
		if (!/^#[0-9A-F]{6}$/i.test(color)) {
			return {
				inputColor: color,
				colorName: `Invalid Color: ${color}`,
				closestHex: null,
				exactMatch: false,
			};
		}

		color = color.toUpperCase();
		const rgb = this.rgb(color);
		let closestMatch = null;
		let smallestDistance = Infinity;

		for (const c of colors) {
			const targetRgb = this.rgb(c.hex);
			const distance = this.calculateDistance(rgb, targetRgb);
			if (distance === 0) {
				// Exact match found
				return {
					inputColor: color,
					colorName: c.name,
					closestHex: c.hex,
					exactMatch: true,
				};
			}

			if (distance < smallestDistance) {
				smallestDistance = distance;
				closestMatch = c;
			}
		}

		return closestMatch
			? {
					inputColor: color,
					colorName: closestMatch.name,
					closestHex: closestMatch.hex,
					exactMatch: false,
					distance: smallestDistance,
			  }
			: {
					inputColor: "#000000",
					colorName: `Invalid Color: ${color}`,
					closestHex: null,
					exactMatch: false,
			  };
	},

	/**
	 * Convert a hex color code to RGB.
	 * @param {string} color - Hex color code.
	 * @returns {Array} - [Red, Green, Blue].
	 */
	rgb: function (color) {
		return [
			parseInt(color.slice(1, 3), 16),
			parseInt(color.slice(3, 5), 16),
			parseInt(color.slice(5, 7), 16),
		];
	},

	/**
	 * Calculate the Euclidean distance between two RGB colors.
	 * @param {Array} rgb1 - [Red, Green, Blue].
	 * @param {Array} rgb2 - [Red, Green, Blue].
	 * @returns {number} - Distance between the two colors.
	 */
	calculateDistance: function (rgb1, rgb2) {
		return Math.sqrt(
			Math.pow(rgb1[0] - rgb2[0], 2) +
				Math.pow(rgb1[1] - rgb2[1], 2) +
				Math.pow(rgb1[2] - rgb2[2], 2)
		);
	},
};

/**
 * This function identifies the give color hex value or its closest color
 * @param {*} hex
 * @returns Object
 */
function identifyColor(hex) {
	const result = ic.name(hex);
	return result;
}

/**
 * This function converts hex color to rgb value
 * @param {*} hex
 * @returns
 */
function hexToRgb(hex) {
	return ic.rgb(hex);
}

module.exports = { identifyColor, hexToRgb };
