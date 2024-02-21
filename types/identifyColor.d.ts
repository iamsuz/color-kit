import { Color } from "./colors";

/**
 * Result of identifying a color.
 */
export interface IdentifyColorResult {
	inputColor: string;
	colorName: string;
	closestHex: string | null;
	exactMatch: boolean;
	distance?: number; // Optional property for the distance
}

/**
 * Identifies the given color hex value or its closest color.
 * @param hex - The hex color value (e.g., "#FF5733").
 * @returns An object containing color information.
 */
export function identifyColor(hex: string): IdentifyColorResult;

/**
 * Converts a hex color value to an RGB array.
 * @param hex - The hex color value (e.g., "#FF5733").
 * @returns An array with [Red, Green, Blue] values.
 */
export function hexToRgb(hex: string): [number, number, number];
