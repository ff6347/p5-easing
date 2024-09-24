/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * Sine in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInSine(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, change, duration) => {
	return -change * Math.cos((time / duration) * (Math.PI / 2)) + change + start;
};

/**
 * Sine out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutSine(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeOut: EasingFunction = (time, start, change, duration) => {
	return change * Math.sin((time / duration) * (Math.PI / 2)) + start;
};

/**
 * Sine in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutSine(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, change, duration) => {
	return (-change / 2) * (Math.cos((Math.PI * time) / duration) - 1) + start;
};

export {
	easeIn as easeInSine,
	easeOut as easeOutSine,
	easeInOut as easeInOutSine,
};
