import { test, describe, expect } from "vitest";

describe("quad", () => {
	test("should start at 0", async () => {
		const easing = await import("../src");
		expect(easing.easeInQuad).toBeDefined();
		const time = 0;
		const start = 0;
		const end = 1;
		const duration = 1;
		const expected = 0;
		const result = easing.easeInQuad(time, start, end, duration);
		expect(result).toBe(expected);
	});

	test("should end close to 1", async () => {
		const easing = await import("../src");
		expect(easing.easeInQuad).toBeDefined();
		const time = 1;
		const start = 0;
		const end = 1;
		const duration = 1;
		const expected = 1;
		const result = easing.easeInQuad(time, start, end, duration);
		expect(result).toBeCloseTo(expected, 10);
	});

	test("should end at 1", async () => {
		const easing = await import("../src");
		expect(easing.easeOutQuad).toBeDefined();
		const time = 1;
		const start = 0;
		const end = 1;
		const duration = 1;
		const expected = 1;
		const result = easing.easeOutQuad(time, start, end, duration);
		expect(result).toBe(expected);
	});
});
