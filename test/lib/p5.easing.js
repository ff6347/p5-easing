this.p5 = this.p5 || {};
this.p5.easing = (function (exports) {
    'use strict';

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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
    const easeIn$a = (time, start, end, duration) => {
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
    const easeOut$a = (time, start, end, duration) => {
        const s = 1.70158;
        return (end * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) +
            start);
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
    const easeInOut$a = (time, start, end, duration) => {
        let s = 1.70158;
        if ((time /= duration / 2) < 1) {
            return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start;
        }
        return ((end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) +
            start);
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeIn$9 = (time, start, end, duration) => {
        return end - easeOut$9(duration - time, 0, end, duration) + start;
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
     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeOut$9 = (time, start, end, duration) => {
        if ((time /= duration) < 1 / 2.75) {
            return end * (7.5625 * time * time) + start;
        }
        else if (time < 2 / 2.75) {
            return end * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + start;
        }
        else if (time < 2.5 / 2.75) {
            return end * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + start;
        }
        else {
            return end * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + start;
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeInOut$9 = (time, start, end, duration) => {
        if (time < duration / 2) {
            return easeIn$9(time * 2, 0, end, duration) * 0.5 + start;
        }
        else {
            return (easeOut$9(time * 2 - duration, 0, end, duration) * 0.5 + end * 0.5 + start);
        }
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeIn$8 = (time, start, end, duration) => {
        return -end * (Math.sqrt(1 - (time /= duration) * time) - 1) + start;
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeOut$8 = (time, start, end, duration) => {
        return end * Math.sqrt(1 - (time = time / duration - 1) * time) + start;
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeInOut$8 = (time, start, end, duration) => {
        if ((time /= duration / 2) < 1) {
            return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start;
        }
        return (end / 2) * (Math.sqrt(1 - (time -= 2) * time) + 1) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
    /**
     * Cubic in easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInCubic(frameCount % duration, start, end, duration);
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
    const easeIn$7 = (time, start, end, duration) => {
        return end * (time /= duration) * time * time + start;
    };
    /**
     * Cubic out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeOutCubic(frameCount % duration, start, end, duration);
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
    const easeOut$7 = (time, start, end, duration) => {
        return end * ((time = time / duration - 1) * time * time + 1) + start;
    };
    /**
     * Cubic in-out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInOutCubic(frameCount % duration, start, end, duration);
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
    const easeInOut$7 = (time, start, end, duration) => {
        if ((time /= duration / 2) < 1) {
            return (end / 2) * time * time * time + start;
        }
        return (end / 2) * ((time -= 2) * time * time + 2) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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
    const easeIn$6 = (time, start, end, duration) => {
        if (time === 0)
            return start;
        if ((time /= duration) === 1)
            return start + end;
        const p = duration * 0.3;
        const s = p / 4;
        return (-(end *
            Math.pow(2, 10 * (time -= 1)) *
            Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) + start);
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
    const easeOut$6 = (time, start, end, duration) => {
        if (time === 0)
            return start;
        if ((time /= duration) === 1)
            return start + end;
        const p = duration * 0.3;
        const s = p / 4;
        return (end *
            Math.pow(2, -10 * time) *
            Math.sin(((time * duration - s) * (2 * Math.PI)) / p) +
            end +
            start);
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
    const easeInOut$6 = (time, start, end, duration) => {
        if (time === 0)
            return start;
        if ((time /= duration / 2) === 2)
            return start + end;
        const p = duration * (0.3 * 1.5);
        const s = p / 4;
        if (time < 1) {
            return (-0.5 *
                (end *
                    Math.pow(2, 10 * (time -= 1)) *
                    Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) +
                start);
        }
        return (end *
            Math.pow(2, -10 * (time -= 1)) *
            Math.sin(((time * duration - s) * (2 * Math.PI)) / p) *
            0.5 +
            end +
            start);
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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
    const easeIn$5 = (time, start, end, duration) => {
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
    const easeOut$5 = (time, start, end, duration) => {
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
    const easeInOut$5 = (time, start, end, duration) => {
        if (time === 0)
            return start;
        if (time === duration)
            return start + end;
        if ((time /= duration / 2) < 1) {
            return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
        }
        return (end / 2) * (-Math.pow(2, -10 * --time) + 2) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
    /**
     * Linear in easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInLinear(frameCount % duration, start, end, duration);
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
    const easeIn$4 = (time, start, end, duration) => {
        return (end * time) / duration + start;
    };
    /**
     * Linear out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeOutLinear(frameCount % duration, start, end, duration);
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
    const easeOut$4 = (time, start, end, duration) => {
        return (end * time) / duration + start;
    };
    /**
     * Linear in-out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInOutLinear(frameCount % duration, start, end, duration);
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
    const easeInOut$4 = (time, start, end, duration) => {
        return (end * time) / duration + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
    /**
     * Quad in easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInQuad(frameCount % duration, start, end, duration);
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
    const easeIn$3 = (time, start, end, duration) => {
        return end * (time /= duration) * time + start;
    };
    /**
     * Quad out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeOutQuad(frameCount % duration, start, end, duration);
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
    const easeOut$3 = (time, start, end, duration) => {
        return -end * (time /= duration) * (time - 2) + start;
    };
    /**
     * Quad in-out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInOutQuad(frameCount % duration, start, end, duration);
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
    const easeInOut$3 = (time, start, end, duration) => {
        if ((time /= duration / 2) < 1) {
            return (end / 2) * time * time + start;
        }
        return (-end / 2) * (--time * (time - 2) - 1) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
    /**
     * Quart in easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInQuart(frameCount % duration, start, end, duration);
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
    const easeIn$2 = (time, start, end, duration) => {
        return end * (time /= duration) * time * time * time + start;
    };
    /**
     * Quart out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeOutQuart(frameCount % duration, start, end, duration);
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
    const easeOut$2 = (time, start, end, duration) => {
        return -end * ((time = time / duration - 1) * time * time * time - 1) + start;
    };
    /**
     * Quart in-out easing function
     * @example
     * const start = 0;
     * const end = 100;
     * const duration = 100;
     * function setup() {
     *  createCanvas(end, end);
     * }
     * function draw() {
     * background(255, 10);
     * const x = easeInOutQuart(frameCount % duration, start, end, duration);
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
    const easeInOut$2 = (time, start, end, duration) => {
        if ((time /= duration / 2) < 1) {
            return (end / 2) * time * time * time * time + start;
        }
        return (-end / 2) * ((time -= 2) * time * time * time - 2) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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
    const easeIn$1 = (time, start, end, duration) => {
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
    const easeOut$1 = (time, start, end, duration) => {
        return (end * ((time = time / duration - 1) * time * time * time * time + 1) + start);
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
    const easeInOut$1 = (time, start, end, duration) => {
        if ((time /= duration / 2) < 1) {
            return (end / 2) * time * time * time * time * time + start;
        }
        return (end / 2) * ((time -= 2) * time * time * time * time + 2) + start;
    };

    /**
     * Easing Functions adapted from Robert Penner's easing equations.
     * Copyright © 2001 Robert Penner
     * BSD License: http://robertpenner.com/easing_terms_of_use.html
     */
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeIn = (time, start, end, duration) => {
        return -end * Math.cos((time / duration) * (Math.PI / 2)) + end + start;
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeOut = (time, start, end, duration) => {
        return end * Math.sin((time / duration) * (Math.PI / 2)) + start;
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

     * @param time - The current time.
     * @param start - The start value.
     * @param end - The end in value.
     * @param duration - The duration of the animation.
     * @returns The calculated value at the current time.
     */
    const easeInOut = (time, start, end, duration) => {
        return (-end / 2) * (Math.cos((Math.PI * time) / duration) - 1) + start;
    };

    // Add easing functions to p5
    const easing = {
        back: {
            easeIn: easeIn$a,
            easeOut: easeOut$a,
            easeInOut: easeInOut$a,
        },
        bounce: {
            easeIn: easeIn$9,
            easeOut: easeOut$9,
            easeInOut: easeInOut$9,
        },
        circ: {
            easeIn: easeIn$8,
            easeOut: easeOut$8,
            easeInOut: easeInOut$8,
        },
        cubic: {
            easeIn: easeIn$7,
            easeOut: easeOut$7,
            easeInOut: easeInOut$7,
        },
        elastic: {
            easeIn: easeIn$6,
            easeOut: easeOut$6,
            easeInOut: easeInOut$6,
        },
        expo: {
            easeIn: easeIn$5,
            easeOut: easeOut$5,
            easeInOut: easeInOut$5,
        },
        linear: {
            easeIn: easeIn$4,
            easeOut: easeOut$4,
            easeInOut: easeInOut$4,
        },
        quad: {
            easeIn: easeIn$3,
            easeOut: easeOut$3,
            easeInOut: easeInOut$3,
        },
        quart: {
            easeIn: easeIn$2,
            easeOut: easeOut$2,
            easeInOut: easeInOut$2,
        },
        quint: {
            easeIn: easeIn$1,
            easeOut: easeOut$1,
            easeInOut: easeInOut$1,
        },
        sine: {
            easeIn: easeIn,
            easeOut: easeOut,
            easeInOut: easeInOut,
        },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (p5) {
        // p5.easing = easing;
        for (const [type, functions] of Object.entries(easing)) {
            for (const [name, func] of Object.entries(functions)) {
                const funcName = `${name}${type.charAt(0).toUpperCase() + type.slice(1)}`;
                p5.prototype[`${funcName}`] = func;
            }
        }
        //@ts-expect-error window.p5 is added by the p5.js library
    })(window.p5);

    exports.easeInBack = easeIn$a;
    exports.easeInBounce = easeIn$9;
    exports.easeInCirc = easeIn$8;
    exports.easeInCubic = easeIn$7;
    exports.easeInElastic = easeIn$6;
    exports.easeInExpo = easeIn$5;
    exports.easeInLinear = easeIn$4;
    exports.easeInOutBack = easeInOut$a;
    exports.easeInOutBounce = easeInOut$9;
    exports.easeInOutCirc = easeInOut$8;
    exports.easeInOutCubic = easeInOut$7;
    exports.easeInOutElastic = easeInOut$6;
    exports.easeInOutExpo = easeInOut$5;
    exports.easeInOutLinear = easeInOut$4;
    exports.easeInOutQuad = easeInOut$3;
    exports.easeInOutQuart = easeInOut$2;
    exports.easeInOutQuint = easeInOut$1;
    exports.easeInOutSine = easeInOut;
    exports.easeInQuad = easeIn$3;
    exports.easeInQuart = easeIn$2;
    exports.easeInQuint = easeIn$1;
    exports.easeInSine = easeIn;
    exports.easeOutBack = easeOut$a;
    exports.easeOutBounce = easeOut$9;
    exports.easeOutCirc = easeOut$8;
    exports.easeOutCubic = easeOut$7;
    exports.easeOutElastic = easeOut$6;
    exports.easeOutExpo = easeOut$5;
    exports.easeOutLinear = easeOut$4;
    exports.easeOutQuad = easeOut$3;
    exports.easeOutQuart = easeOut$2;
    exports.easeOutQuint = easeOut$1;
    exports.easeOutSine = easeOut;

    return exports;

})({});
