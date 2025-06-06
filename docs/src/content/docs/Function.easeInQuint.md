---
layout: ../../layouts/Layout.astro
---

[**@ff6347/p5-easing**](README.md) • **Docs**

***

```ts
function easeInQuint(
   time, 
   start, 
   end, 
   duration): number
```

Quint in easing function

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
const x = easeInQuint(frameCount % duration, start, end, duration);
const y = frameCount % duration;
circle(x, y, 10);
}
```

## Defined in

[../src/easing/quint.ts:32](https://github.com/ff6347/p5-easing/blob/7e0a9fff511aefc237e917cc4b77c9211f7bfc19/src/easing/quint.ts#L32)
