import * as back from "./easing/back";
import * as bounce from "./easing/bounce";
import * as circ from "./easing/circ";
import * as cubic from "./easing/cubic";
import * as elastic from "./easing/elastic";
import * as expo from "./easing/expo";
import * as linear from "./easing/linear";
import * as quad from "./easing/quad";
import * as quart from "./easing/quart";
import * as quint from "./easing/quint";
import * as sine from "./easing/sine";

export { easeInBack, easeInOutBack, easeOutBack } from "./easing/back";
export { easeInBounce, easeInOutBounce, easeOutBounce } from "./easing/bounce";
export { easeInCirc, easeInOutCirc, easeOutCirc } from "./easing/circ";
export { easeInCubic, easeInOutCubic, easeOutCubic } from "./easing/cubic";
export {
	easeInElastic,
	easeInOutElastic,
	easeOutElastic,
} from "./easing/elastic";
export { easeInExpo, easeInOutExpo, easeOutExpo } from "./easing/expo";
export { easeInLinear, easeInOutLinear, easeOutLinear } from "./easing/linear";
export { easeInQuad, easeInOutQuad, easeOutQuad } from "./easing/quad";
export { easeInQuart, easeInOutQuart, easeOutQuart } from "./easing/quart";
export { easeInQuint, easeInOutQuint, easeOutQuint } from "./easing/quint";
export { easeInSine, easeInOutSine, easeOutSine } from "./easing/sine";

// Add easing functions to p5
const easing = {
	back: {
		easeIn: back.easeIn,
		easeOut: back.easeOut,
		easeInOut: back.easeInOut,
	},
	bounce: {
		easeIn: bounce.easeIn,
		easeOut: bounce.easeOut,
		easeInOut: bounce.easeInOut,
	},

	circ: {
		easeIn: circ.easeIn,
		easeOut: circ.easeOut,
		easeInOut: circ.easeInOut,
	},
	cubic: {
		easeIn: cubic.easeIn,
		easeOut: cubic.easeOut,
		easeInOut: cubic.easeInOut,
	},
	elastic: {
		easeIn: elastic.easeIn,
		easeOut: elastic.easeOut,
		easeInOut: elastic.easeInOut,
	},
	expo: {
		easeIn: expo.easeIn,
		easeOut: expo.easeOut,
		easeInOut: expo.easeInOut,
	},
	linear: {
		easeIn: linear.easeIn,
		easeOut: linear.easeOut,
		easeInOut: linear.easeInOut,
	},
	quad: {
		easeIn: quad.easeIn,
		easeOut: quad.easeOut,
		easeInOut: quad.easeInOut,
	},
	quart: {
		easeIn: quart.easeIn,
		easeOut: quart.easeOut,
		easeInOut: quart.easeInOut,
	},
	quint: {
		easeIn: quint.easeIn,
		easeOut: quint.easeOut,
		easeInOut: quint.easeInOut,
	},
	sine: {
		easeIn: sine.easeIn,
		easeOut: sine.easeOut,
		easeInOut: sine.easeInOut,
	},
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(function (p5: any) {
	// p5.easing = easing;
	for (const [type, functions] of Object.entries(easing)) {
		for (const [name, func] of Object.entries(functions)) {
			const funcName = `${name}${type.charAt(0).toUpperCase() + type.slice(1)}`;
			p5.prototype[`${funcName}`] = func;
		}
	}
	//@ts-expect-error window.p5 is added by the p5.js library
})(window.p5);
