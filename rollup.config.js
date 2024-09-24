//@ts-check
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/p5.easing.js",
				format: "iife",
				name: "p5.easing",
				globals: {
					p5: "p5",
				},
			},
			{
				file: "dist/p5.easing.min.js",
				format: "iife",
				compact: true,
				plugins: [terser()],
				name: "p5.easing",
				globals: {
					p5: "p5",
				},
			},
			{
				file: "dist/p5.easing.mjs",
				exports: "named",
				format: "esm",
			},
		],
		external: ["p5"],
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				sourceMap: false,
			}),
			copy({
				targets: [{ src: "dist/p5.easing.*", dest: "test/lib" }],
			}),
		],
	},
];
