# Deployment

To manage the package deployments in this project we use [Lerna](https://lerna.js.org/)

## Release Please

When you push changes to a package directory to the `master` branch our release please action will add those to the changelog it will generate. Once you merge the release please PR it will run [lerna publish](https://lerna.js.org/docs/features/version-and-publish) which deploys any changes to all of the packages so everything is kept up to date.

## Deploying All Packages

If you want to manually run lerna publish you can manually run the `Deploy all latest packages` action. This will run [lerna publish](https://lerna.js.org/docs/features/version-and-publish) which deploys all the changes to the packages. If you are going to run this make sure you manually bump the package versions beforehand.
