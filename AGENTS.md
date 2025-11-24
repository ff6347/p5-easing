# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library that provides Robert Penner's easing functions for p5.js. The library can be used with or without p5.js, but is primarily designed for educational use with p5.js. It compiles to multiple formats (IIFE, ESM) and automatically extends the p5.js prototype with easing functions.

## Build and Development Commands

```bash
# Build the library (outputs to dist/)
npm run build

# Build in watch mode for development
npm run dev

# Run tests with Vitest (uses Firefox via WebDriverIO)
npm test

# Run manual tests in browser
npm run test:manual

# Generate TypeDoc documentation
npm run typedoc
```

## Architecture

### Source Structure

- `src/index.ts` - Main entry point that:
  - Imports all easing function modules
  - Re-exports named functions (e.g., `easeInBack`, `easeOutBounce`)
  - Extends p5.js prototype with easing functions when p5 is available
  - Dynamically generates method names (e.g., `easeInBack`, `easeOutLinear`) from module structure

- `src/easing/` - Individual easing function modules:
  - Each module exports `easeIn`, `easeOut`, `easeInOut` functions
  - Also re-exports with full names (e.g., `easeInLinear`, `easeOutLinear`)
  - All follow the signature: `(time, start, end, duration) => number`

- `src/types.ts` - Type definitions:
  - `EasingFunction` type used by all easing functions

### Build Output

The Rollup build produces three formats:
- `dist/p5.easing.js` - IIFE for browser `<script>` tags
- `dist/p5.easing.min.js` - Minified IIFE for production
- `dist/p5.easing.mjs` - ESM module for modern bundlers
- `dist/types/` - TypeScript type definitions

The build also copies output files to `test/lib/` for manual testing.

### Testing

- Tests use Vitest with browser mode (Firefox + WebDriverIO)
- Test setup in `test/setup.ts` (currently minimal/commented)
- Tests load p5.js from `node_modules/p5/lib/p5.min.js`
- Each easing type has its own test file (e.g., `linear.test.ts`, `quad.test.ts`)

### Key Implementation Detail

The library dynamically extends p5.js by iterating over easing types and function names to create method names. For example, `back.easeIn` becomes `p5.prototype.easeInBack`. This pattern is in `src/index.ts:89-96`.
