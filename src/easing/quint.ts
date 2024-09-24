/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * Quint in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInQuint(frameCount % duration, start, end, duration);
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
	return end * (time /= duration) * time * time * time * time + start;
};

/**
 * Quint out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutQuint(frameCount % duration, start, end, duration);
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
	return (
		end * ((time = time / duration - 1) * time * time * time * time + 1) + start
	);
};

/**
 * Quint in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutQuint(frameCount % duration, start, end, duration);
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
	if ((time /= duration / 2) < 1) {
		return (end / 2) * time * time * time * time * time + start;
	}
	return (end / 2) * ((time -= 2) * time * time * time * time + 2) + start;
};

export {
	easeIn as easeInQuint,
	easeOut as easeOutQuint,
	easeInOut as easeInOutQuint,
};
