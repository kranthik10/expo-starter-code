module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Reanimated (v3) uses worklets; ensure the worklets plugin is available.
      // Prefer the explicit worklets plugin; if not present, fall back to reanimated's plugin.
      "react-native-worklets/plugin",
      "react-native-reanimated/plugin",
    ],
  };
};