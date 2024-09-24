module.exports = {
	extends: "@technologiestiftung/semantic-release-config",
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
};
