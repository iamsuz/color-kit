/**
 * Identifies the given color hex value or its closest color.
 * @param hex - The hex color value (e.g., "#FF53FE").
 * @returns An object containing the color name, its hex value, and additional details.
 */
export function identifyColor(hex: string): {
	name: string;
	hex: string;
	exactMatch: boolean;
	distance?: number;
};

/**
 * Converts a hex color value to an RGB object.
 * @param hex - The hex color value (e.g., "#FF5733").
 * @returns An object containing the RGB representation.
 */
export function hexToRgb(hex: string): {
	r: number;
	g: number;
	b: number;
};

/**
 * Generates a random color.
 * @returns An object containing the random color in hex and RGB formats.
 */
export function generateRandomColor(): {
	hex: string;
	rgb: {
		r: number;
		g: number;
		b: number;
	};
};
