---
layout: ../../layouts/Layout.astro
---

**@ff6347/p5-easing** • [**Docs**](globals.md)

***

# (P5js) Easing functions

This is a library that provides easing functions for use with our without p5.js. The library is based on [Robert Penner's easing equations](http://robertpenner.com/easing/). Since we use it in an educational context together with p5.js, the rest of the documentation will be written with p5.js in mind.

## Installation

To install the library, [download](https://github.com/ff6347/p5-easing/releases) the `p5.easing.js` files and include it in your project.

Or use npm to install it:

```bash
npm install @ff6347/p5-easing
# copy the files from node_modules/@ff6347/p5-easing/dist to your project
cp node_modules/@ff6347/p5-easing/dist/p5.easing.js .
```

Or include it from a CDN (replace `latest` with the version you want to use):

```html
<script src="https://unpkg.com/@ff6347/p5-easing@latest/dist/p5.easing.min.js"></script>
```

## Usage

To use the library, include `p5.js` and the `p5.easing.js` file in your html and call the easing functions like this:

index.html

```html
<!doctype html>
<html>
	<head>
		<title>P5 Easing Functions</title>
		<script src="p5.js"></script>
		<script src="p5.easing.js"></script>
		<script src="sketch.js"></script>
	</head>
	<body></body>
</html>
```

This is sketch.js

```js
const start = 0; // The value at the start of the easing function
const end = 100; // The value we want to reach
const duration = 100; // The duration of the easing function in frames in our case

function setup() {
	createCanvas(end, end);
}
function draw() {
	background(255, 10);
	// The time is what drives the easing function
	// It is the current frame count provided by p5.js
	// constrained to the duration of the easing function using module
	const time = frameCount % duration;
	const x = easeInOutExpo(time, start, end, duration);
	const y = frameCount % duration;
	circle(x, y, 10);
}
```

## License and Attribution

This project uses easing functions based on Robert Penner's easing equations.
Copyright © 2001 Robert Penner
These functions are released under the BSD License.
See http://robertpenner.com/easing_terms_of_use.html for full license details.

## Realted Projects and Further Reading

- [https://easings.net/](https://easings.net/)
- [https://github.com/hslu-dda/p5easing](https://github.com/hslu-dda/p5easing)
