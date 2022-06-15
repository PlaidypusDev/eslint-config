const { mergeConfigs } = require("@plaidypus-dev/eslint-utils");
const baseConfig = require("@plaidypus-dev/eslint-config-base");

const reactConfig = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        message:
          "It is better if your prop ({{ propName }}) starts with `is` or `has`",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/no-array-index-key": "warn",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-pascal-case": "error",
    "react/react-in-jsx-scope": "off",
  },
};

const combinedConfigs = mergeConfigs(baseConfig, reactConfig);

module.exports = combinedConfigs;
