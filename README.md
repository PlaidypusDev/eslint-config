# Plaidypus Eslint Config
This repository is a monorepo containing our custom eslint packages

## Links
- Base eslint package: https://www.npmjs.com/package/@plaidypus-dev/eslint-config-base
- React eslint package: https://www.npmjs.com/package/@plaidypus-dev/eslint-config-react
- React Native eslint package: https://www.npmjs.com/package/@plaidypus-dev/eslint-config-react-native

## Development
Once you first pull the repository run `yarn` in the root of the project. To install the necessary dependencies and link the local Lerna dependencies you can run `yarn lerna:bootstrap` in the root of the repository.

When you make changes to an eslint config the other eslint configs that depend on it will automatically use the local version. You can test your changes by using [yarn link](https://classic.yarnpkg.com/lang/en/docs/cli/link/). You can create your own test project to use yarn link on.


### Installation

```sh
yarn add -D eslint@^8.0.0 prettier@^2.0.0 @typescript-eslint/eslint-plugin@^5.27.1 eslint-plugin-import@^2.26.0 eslint-plugin-prettier@^4.0.0 eslint-plugin-unused-imports@^2.0.0 @plaidypus-dev/eslint-config-base
```

OR

```sh
npx install-peerdeps --dev @plaidypus-dev/eslint-config-base
```

## @plaidypus-dev/eslint-config-react

### Installation

```sh
yarn add -D eslint@^8.0.0 prettier@^2.0.0 @typescript-eslint/eslint-plugin@^5.27.1 eslint-plugin-import@^2.26.0 eslint-plugin-prettier@^4.0.0 eslint-plugin-unused-imports@^2.0.0 eslint-plugin-react@^7.30.0 eslint-plugin-react-hooks@^4.5.0 @plaidypus-dev/eslint-config-base @plaidypus-dev/eslint-config-react
```

OR

```sh
npx install-peerdeps --dev @plaidypus-dev/eslint-config-react
```

## @plaidypus-dev/eslint-config-react-native

### Installation

```sh
yarn add -D eslint@^8.0.0 prettier@^2.0.0 @typescript-eslint/eslint-plugin@^5.27.1 eslint-plugin-import@^2.26.0 eslint-plugin-prettier@^4.0.0 eslint-plugin-unused-imports@^2.0.0 eslint-plugin-react@^7.30.0 eslint-plugin-react-hooks@^4.5.0 eslint-plugin-react-native@^4.0.0 @plaidypus-dev/eslint-config-base @plaidypus-dev/eslint-config-react @plaidypus-dev/eslint-config-react-native
```

OR

```sh
npx install-peerdeps --dev @plaidypus-dev/eslint-config-react-native
```
