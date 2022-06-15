const reactConfig = require("@plaidypus-dev/eslint-config-react");

const reactNativeConfig = {
  ...reactConfig,
  plugins: [...reactConfig.plugins, "react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    ...reactConfig.rules,
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "off",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "warn",
  },
};

module.exports = reactNativeConfig;
