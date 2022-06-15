module.exports = {
  mergeConfigs: (configOne, configTwo) => ({
    ...configOne,
    ...configTwo,
    extends: [...(configOne?.extends ?? []), ...(configTwo?.extends ?? [])],
    plugins: [...(configOne?.plugins ?? []), ...(configTwo?.plugins ?? [])],
    rules: {
      ...(configOne?.rules ?? {}),
      ...(configTwo?.rules ?? {}),
    },
  }),
};
