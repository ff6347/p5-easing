---
layout: ../../layouts/Layout.astro
---

[**@ff6347/p5-easing**](README.md) • **Docs**

***

```ts
function easeOutCirc(
   time, 
   start, 
   end, 
   duration): number
```

Circ out easing function

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current time. |
| `start` | `number` | The start value. |
| `end` | `number` | The end in value. |
| `duration` | `number` | The duration of the animation. |

## Returns

`number`

The calculated value at the current time.

## Example

```ts
const start = 0;
const end = 100;
const duration = 100;
function setup() {
 createCanvas(end, end);
}
function draw() {
background(255, 10);
const x = easeOutCirc(frameCount % duration, start, end, duration);
const y = frameCount % duration;
circle(x, y, 10);
}
```

## Defined in

[../src/easing/circ.ts:57](https://github.com/ff6347/p5-easing/blob/226687d365587d73a12ac8d460667a1a198c05c5/src/easing/circ.ts#L57)