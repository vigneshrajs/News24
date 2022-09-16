module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            'src/*': './src',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"],     //removing consoles.log from app during release (production) versions
      },
    },
  };
};
