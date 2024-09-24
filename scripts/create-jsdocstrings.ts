import fs from "node:fs";
import path from "node:path";
const names = [
	"Back",
	"Bounce",
	"Circ",
	"Cubic",
	"Elastic",
	"Expo",
	"Linear",
	"Quad",
	"Quart",
	"Quint",
	"Sine",
];
const types = ["In", "Out", "InOut"];

const jsDocStrings: string[] = [];
for (const name of names) {
	for (const type of types) {
		const docString = `/**
* ${name} in easing function
* @example
* const start = 0;
* const end = 100;
* const duration = 100;
* function setup() {
*  createCanvas(end, end);
* }
* function draw() {
* background(255, 10);
* const x = ease${type}${name}(frameCount % duration, start, end, duration);
* const y = frameCount % duration;
* circle(x, y, 10);
* }
*
* @returns {number} - The calculated value at the current time.
*/`;
		jsDocStrings.push(
			`## ${type + name}\n\n${"```js"}\n${docString}\n${"```"}\n`,
		);
	}
	jsDocStrings.push("\n\n");
}

fs.writeFileSync(
	path.resolve(process.cwd(), "./docs/tmp/jsdocstrings.md"),
	jsDocStrings.join("\n"),
);
