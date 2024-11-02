import { test, describe, expect } from "vitest";

describe("import export", () => {
	test("easing", async () => {
		const easing = await import("../src");
		expect(easing).toBeDefined();
	});

	test("easing Quad", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutQuad).toBeDefined();
		expect(easing.easeInQuad).toBeDefined();
		expect(easing.easeOutQuad).toBeDefined();
	});

	test("easing Cubic", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutCubic).toBeDefined();
		expect(easing.easeInCubic).toBeDefined();
		expect(easing.easeOutCubic).toBeDefined();
	});

	test("easing Quart", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutQuart).toBeDefined();
		expect(easing.easeInQuart).toBeDefined();
		expect(easing.easeOutQuart).toBeDefined();
	});

	test("easing Quint", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutQuint).toBeDefined();
		expect(easing.easeInQuint).toBeDefined();
		expect(easing.easeOutQuint).toBeDefined();
	});

	test("easing Sine", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutSine).toBeDefined();
		expect(easing.easeInSine).toBeDefined();
		expect(easing.easeOutSine).toBeDefined();
	});

	test("easing Expo", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutExpo).toBeDefined();
		expect(easing.easeInExpo).toBeDefined();
		expect(easing.easeOutExpo).toBeDefined();
	});

	test("easing Circ", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutCirc).toBeDefined();
		expect(easing.easeInCirc).toBeDefined();
		expect(easing.easeOutCirc).toBeDefined();
	});

	test("easing Elastic", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutElastic).toBeDefined();
		expect(easing.easeInElastic).toBeDefined();
		expect(easing.easeOutElastic).toBeDefined();
	});

	test("easing Back", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutBack).toBeDefined();
		expect(easing.easeInBack).toBeDefined();
		expect(easing.easeOutBack).toBeDefined();
	});

	test("easing Bounce", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutBounce).toBeDefined();
		expect(easing.easeInBounce).toBeDefined();
		expect(easing.easeOutBounce).toBeDefined();
	});

	test("easing Back", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutQuart).toBeDefined();
		expect(easing.easeInQuart).toBeDefined();
		expect(easing.easeOutQuart).toBeDefined();
	});

	test("easing Bounce", async () => {
		const easing = await import("../src");
		expect(easing.easeInOutBounce).toBeDefined();
		expect(easing.easeInBounce).toBeDefined();
		expect(easing.easeOutBounce).toBeDefined();
	});
});
