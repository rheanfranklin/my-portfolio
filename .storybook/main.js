module.exports = {
  staticDirs: ['../public'],
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(ts|tsx)$/, 
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            [
              require.resolve('@babel/preset-react'),
              { runtime: 'automatic' },
            ],
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    });
    return config;
  },
};
