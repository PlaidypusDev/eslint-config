const baseConfig = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "unused-imports", "import"],
  rules: {
    // Prettier
    "prettier/prettier": "error",
    // General
    "no-console": "warn",
    // TypeScript
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/triple-slash-reference": "off",
    // Unused Imports
    "unused-imports/no-unused-imports": "warn",
    // Imports
    "import/no-useless-path-segments": "warn",
    "import/first": "error",
    "import/no-duplicates": "warn",
    // Naming conventions
    "@typescript-eslint/naming-convention": [
      "error",
      // camelCase
      {
        selector: [
          "variableLike",
          "property",
          "method",
          "parameterProperty",
          "accessor",
        ],
        format: ["strictCamelCase"],
      },
      // Allow ITestType
      {
        "selector": ["typeLike"],
        "format": ["PascalCase"],
        "filter": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },
      // PascalCase
      {
        selector: ["typeLike"],
        format: ["StrictPascalCase"],
      },
      {
        "selector": ["property"],
        "format": ["StrictPascalCase"],
        "filter": {
          "regex": "^(.*)(Screen(s?))$",
          "match": true
        }
      },
      // Allow PascalCase for react component functions
      // TODO: move this into the react package
      {
        selector: ["function"],
        format: ["strictCamelCase", "StrictPascalCase"],
      },
      // UPPER_CASE
      {
        selector: ["enumMember"],
        format: ["UPPER_CASE"],
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["strictCamelCase", "UPPER_CASE"],
      },
      // prefixes
      {
        selector: ["variable"],
        types: ["boolean"],
        // The prefix is trimmed before format is validated, therefore PascalCase
        // must be used to allow variables such as isEnabled using the prefix is.
        format: ["StrictPascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      {
        selector: ["typeParameter"],
        prefix: ["T"],
        format: null,
      },
    ],
    // TODO: Import ordering
  },
};

module.exports = baseConfig;
