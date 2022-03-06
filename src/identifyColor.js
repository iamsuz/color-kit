const colors = require('./colors');

const ic = {
    name: function (color) {
        if (!/^#[0-9A-F]{6}$/i.test(color)) {
            return ["#000000", `Invalid Color: ${color}`, false];
        }

        color = color.toUpperCase();
        const rgb = this.rgb(color);

        let closestMatch = null;
        let smallestDistance = Infinity;

        for (const c of colors) {
            const targetRgb = this.rgb(c.hex);
            const distance = this.calculateDistance(rgb, targetRgb);

            if (distance === 0) {
                return [c.hex, c.name, true]; // Exact match
            }

            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestMatch = c;
            }
        }

        return closestMatch
            ? [closestMatch.hex, closestMatch.name, false]
            : ["#000000", `Invalid Color: ${color}`, false];
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
            parseInt(color.slice(5, 7), 16)
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
    }
}

function identifyColor(hex) {
    const result = ic.name(hex);
    return {
        inputColor: result[0],
        colorName: result[1],
        closestHex: result[2],
        exactMatch: result[3],
    };
}

module.exports = { identifyColor };
