// @ts-check
import { defineConfig } from "astro/config";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://shiki.style/themes
			theme: "catppuccin-frappe",
			// Alternatively, provide multiple themes
			// See note below for using dual light/dark themes
			themes: {
				light: "catppuccin-frappe",
				dark: "catppuccin-mocha",
			},
			// Disable the default colors
			// https://shiki.style/guide/dual-themes#without-default-color
			// (Added in v4.12.0)
			defaultColor: false,

			// Enable word wrap to prevent horizontal scrolling
			wrap: true,
		},
	},
});
