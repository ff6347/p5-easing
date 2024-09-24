/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * Expo in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInExpo(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, change, duration) => {
	return time === 0
		? start
		: change * Math.pow(2, 10 * (time / duration - 1)) + start;
};

/**
 * Expo out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutExpo(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeOut: EasingFunction = (time, start, change, duration) => {
	return time === duration
		? start + change
		: change * (-Math.pow(2, (-10 * time) / duration) + 1) + start;
};
/**
 * Expo in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutExpo(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, change, duration) => {
	if (time === 0) return start;
	if (time === duration) return start + change;
	if ((time /= duration / 2) < 1) {
		return (change / 2) * Math.pow(2, 10 * (time - 1)) + start;
	}
	return (change / 2) * (-Math.pow(2, -10 * --time) + 2) + start;
};

export {
	easeIn as easeInExpo,
	easeOut as easeOutExpo,
	easeInOut as easeInOutExpo,
};
