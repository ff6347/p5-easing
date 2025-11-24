module.exports = {
	npmPublish: true,
	branches: [
		"+([0-9])?(.{+([0-9]),x}).x",
		"master",
		"main",
		"next",
		"next-major",
		{ name: "beta", prerelease: true },
		{ name: "alpha", prerelease: true },
	],

	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: ["package.json", "pnpm-lock.yaml", "CHANGELOG.md"],
				message: "chore(release): ${nextRelease.version} [skip ci]",
			},
		],
		[
			"@semantic-release/github",
			{
				assets: [
					{ path: "dist/p5.easing.js", label: "IIFE Bundle" },
					{ path: "dist/p5.easing.min.js", label: "Minified IIFE Bundle" },
					{ path: "dist/p5.easing.mjs", label: "ESM Bundle" },
					{ path: "dist/types/**/*", label: "TypeScript Definitions" },
				],
			},
		],
	],
};
