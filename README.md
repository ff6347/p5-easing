# P5js Easing functions

This is a library that provides easing functions for use with p5.js. The library is based on [Robert Penner's easing equations](http://robertpenner.com/easing/).

## Installation

To install the library, [download](#) the `p5.easing.js` files and include it in your project.

## Usage

To use the library, include the `p5.easing.js` file in your html and call the easing functions like this:

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
	const x = easeInOutExpo(, start, end, duration);
	const y = frameCount % duration;
	circle(x, y, 10);
}
```

## License and Attribution

This project uses easing functions based on Robert Penner's easing equations.
Copyright © 2001 Robert Penner
These functions are released under the BSD License.
See http://robertpenner.com/easing_terms_of_use.html for full license details.
