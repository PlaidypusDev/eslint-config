module.exports = {
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
    // TODO: Import ordering
  },
};
