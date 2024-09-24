/**
 * Easing Functions adapted from Robert Penner's easing equations.
 * Copyright © 2001 Robert Penner
 * BSD License: http://robertpenner.com/easing_terms_of_use.html
 */

import { EasingFunction } from "../types";

/**
 * Elastic in easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInElastic(frameCount % duration, start, end, duration);
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
	if (time === 0) return start;
	if ((time /= duration) === 1) return start + end;
	const p = duration * 0.3;
	const s = p / 4;
	return (
		-(
			end *
			Math.pow(2, 10 * (time -= 1)) *
			Math.sin(((time * duration - s) * (2 * Math.PI)) / p)
		) + start
	);
};

/**
 * Elastic out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeOutElastic(frameCount % duration, start, end, duration);
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
	if (time === 0) return start;
	if ((time /= duration) === 1) return start + end;
	const p = duration * 0.3;
	const s = p / 4;
	return (
		end *
			Math.pow(2, -10 * time) *
			Math.sin(((time * duration - s) * (2 * Math.PI)) / p) +
		end +
		start
	);
};

/**
 * Elastic in-out easing function
 * @example
 * const start = 0;
 * const end = 100;
 * const duration = 100;
 * function setup() {
 *  createCanvas(end, end);
 * }
 * function draw() {
 * background(255, 10);
 * const x = easeInOutElastic(frameCount % duration, start, end, duration);
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
	if ((time /= duration / 2) === 2) return start + end;
	const p = duration * (0.3 * 1.5);
	const s = p / 4;
	if (time < 1) {
		return (
			-0.5 *
				(end *
					Math.pow(2, 10 * (time -= 1)) *
					Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) +
			start
		);
	}
	return (
		end *
			Math.pow(2, -10 * (time -= 1)) *
			Math.sin(((time * duration - s) * (2 * Math.PI)) / p) *
			0.5 +
		end +
		start
	);
};

export {
	easeIn as easeInElastic,
	easeOut as easeOutElastic,
	easeInOut as easeInOutElastic,
};
