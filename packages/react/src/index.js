const baseConfig = require("@plaidypus-dev/eslint-config-base");

const reactConfig = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [...baseConfig.plugins, "react"],
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
    ...baseConfig.rules,
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has|should|can|did|will)[A-Z]([A-Za-z0-9]?)+",
        message:
          "It is better if your prop ({{ propName }}) starts with `is`, `has`, `should`, `can`, `did`, or `will`",
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
    // Hooks
    "react-hooks/exhaustive-deps": "error",
    // PascalCase for naming React specific constants
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["variable"],
        "modifiers": ["const"],
        "format": ["StrictPascalCase"],
        "filter": {
          "regex": "^[^use](.*)(Navigator|Context|Screen(s?))$",
          "match": true
        }
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["strictCamelCase", "UPPER_CASE"],
      },
    ]
  },
};

module.exports = reactConfig;
