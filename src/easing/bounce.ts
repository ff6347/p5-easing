/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * Bounce in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInBounce(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, change, duration) => {
	return change - easeOut(duration - time, 0, change, duration) + start;
};
/**
 * Bounce out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutBounce(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeOut: EasingFunction = (time, start, change, duration) => {
	if ((time /= duration) < 1 / 2.75) {
		return change * (7.5625 * time * time) + start;
	} else if (time < 2 / 2.75) {
		return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + start;
	} else if (time < 2.5 / 2.75) {
		return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + start;
	} else {
		return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + start;
	}
};
/**
 * Bounce in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutBounce(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 *
 * @returns {number} - The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, change, duration) => {
	if (time < duration / 2) {
		return easeIn(time * 2, 0, change, duration) * 0.5 + start;
	} else {
		return (
			easeOut(time * 2 - duration, 0, change, duration) * 0.5 +
			change * 0.5 +
			start
		);
	}
};

export {
	easeIn as easeInBounce,
	easeOut as easeOutBounce,
	easeInOut as easeInOutBounce,
};
