const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  alias: {
    '@': resolve('../src'),
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
            importLoaders: 2
          },
        },
        {
          loader: 'resolve-url-loader',
          options: {
            attempts: 1,
            sourceMap: true,
            debug: true,
            root: path.resolve('./src'),
          },
        },
        {
          loader: 'sass-loader',
          options: {
            // Custom variable config file for Sass
            additionalData: '@import "./src/styles/config_assets_vars.scss";',
          },
        }
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}
