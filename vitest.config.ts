import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom",
		setupFiles: ["./test/setup.ts"],
		globals: true,
		browser: {
			enabled: true,
			name: "firefox",
			provider: "webdriverio",
			screenshotFailures: false,
			testerScripts: [{ src: "node_modules/p5/lib/p5.min.js" }],
		},
	},
});
