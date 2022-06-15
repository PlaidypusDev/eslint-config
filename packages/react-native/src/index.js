const { mergeConfigs } = require("@plaidypus-dev/eslint-utils");
const reactConfig = require("@plaidypus-dev/eslint-config-react");

const reactNativeConfig = {
  plugins: ["react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "off",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "warn",
  },
};

const combinedConfigs = mergeConfigs(reactConfig, reactNativeConfig);

module.exports = combinedConfigs;
