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
						navigation: "./navigation"
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
