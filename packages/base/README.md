# Installation

1. Install using `npm` or `yarn`

```sh
yarn add --dev @plaidypus-dev/eslint-config-base
```

```sh
npm i --save-dev @plaidypus-dev/eslint-config-base
```

2. Add `@plaidypus-dev/eslint-config-base` to your eslint config. Make sure your config includes a reference to your project's tsconfig.

```json
{
  "extends": ["@plaidypus-dev/eslint-config-base"],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```
