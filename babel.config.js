module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						components: "./components",
						screens: "./screens",
						interfaces: "./interfaces",
						constants: "./constants",
						hooks: "./hooks",
						navigation: "./navigation",
						assets: "./assets",
					},
				},
			],
			"react-native-reanimated/plugin",
			[
				"module:react-native-dotenv",
				{
					envName: "APP_ENV",
					moduleName: "@env",
					path: ".env",
					blocklist: null,
					allowlist: null,
					blacklist: null, // DEPRECATED
					whitelist: null, // DEPRECATED
					safe: false,
					allowUndefined: true,
					verbose: false,
				},
			],
		],
	};
};
