import { Color } from "./colors";

/**
 * Result of identifying a color.
 */
export interface ColorMatch {
	inputColor: string;
	colorName: string;
	closestHex: string | null;
	exactMatch: boolean;
	distance?: number; // Optional property for the distance
}

/**
 * Defines the structure of the `ic` object and its methods.
 */
export interface I {
	name(color: string): ColorMatch;
	rgb(color: string): number[];
	calculateDistance(rgb1: number[], rgb2: number[]): number;
}

/**
 * Identifies the given color hex value or its closest color.
 * @param hex - The hex color value (e.g., "#FF5733").
 * @returns An object containing color information.
 */
export function identifyColor(hex: string): ColorMatch;

/**
 * Converts a hex color value to an RGB array.
 * @param hex - The hex color value (e.g., "#FF5733").
 * @returns An array with [Red, Green, Blue] values.
 */
export function hexToRgb(hex: string): [number, number, number];
