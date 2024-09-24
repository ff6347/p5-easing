/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";
/**
 * Circ in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInCirc(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, change, duration) => {
	return -change * (Math.sqrt(1 - (time /= duration) * time) - 1) + start;
};
/**
 * Circ out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutCirc(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeOut: EasingFunction = (time, start, change, duration) => {
	return change * Math.sqrt(1 - (time = time / duration - 1) * time) + start;
};
/**
 * Circ in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutCirc(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, change, duration) => {
	if ((time /= duration / 2) < 1) {
		return (-change / 2) * (Math.sqrt(1 - time * time) - 1) + start;
	}
	return (change / 2) * (Math.sqrt(1 - (time -= 2) * time) + 1) + start;
};

export {
	easeIn as easeInCirc,
	easeOut as easeOutCirc,
	easeInOut as easeInOutCirc,
};
