/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * back in easing function that accelerates into the animation.
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *   createCanvas(end, end);
 * }
 * function draw() {
 *   background(255, 10);
 *   const x = easeInBack(frameCount % duration, start, end, duration);
 *   const y = frameCount % duration;
 *   circle(x, y, 10);
 * }
 * @param time - The current time.
 * @param start - The start value.
 * @param end - The end in value.
 * @param duration - The duration of the animation.
 * @returns The calculated value at the current time.
 */
export const easeIn: EasingFunction = (time, start, end, duration) => {
	const s = 1.70158;
	return end * (time /= duration) * time * ((s + 1) * time - s) + start;
};

/**
 * back out easing function that decelerates into the animation.
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutBack(frameCount % duration, start, end, duration);
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
	const s = 1.70158;
	return (
		end * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) +
		start
	);
};

/**
 * back in-out easing function that accelerates into and decelerates out of the animation.
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutBack(frameCount % duration, start, end, duration);
 * const y = frameCount % duration;
 * circle(x, y, 10);
 * }
 * @param time - The current time.
 * @param start - The start value.
 * @param end - The end in value.
 * @param duration - The duration of the animation.
 * @returns The calculated value at the current time.
 */
export const easeInOut: EasingFunction = (time, start, end, duration) => {
	let s = 1.70158;
	if ((time /= duration / 2) < 1) {
		return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start;
	}
	return (
		(end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) +
		start
	);
};

export {
	easeIn as easeInBack,
	easeOut as easeOutBack,
	easeInOut as easeInOutBack,
};
