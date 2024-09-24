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

 * @param time - The current time.
 * @param start - The start value.
 * @param end - The end in value.
 * @param duration - The duration of the animation.
 * @returns The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, end, duration) => {
	return time === 0
		? start
		: end * Math.pow(2, 10 * (time / duration - 1)) + start;
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

 * @param time - The current time.
 * @param start - The start value.
 * @param end - The end in value.
 * @param duration - The duration of the animation.
 * @returns The calculated value at the current time.
 */
export const easeOut: EasingFunction = (time, start, end, duration) => {
	return time === duration
		? start + end
		: end * (-Math.pow(2, (-10 * time) / duration) + 1) + start;
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

 * @param time - The current time.
 * @param start - The start value.
 * @param end - The end in value.
 * @param duration - The duration of the animation.
 * @returns The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, end, duration) => {
	if (time === 0) return start;
	if (time === duration) return start + end;
	if ((time /= duration / 2) < 1) {
		return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
	}
	return (end / 2) * (-Math.pow(2, -10 * --time) + 2) + start;
};

export {
	easeIn as easeInExpo,
	easeOut as easeOutExpo,
	easeInOut as easeInOutExpo,
};
