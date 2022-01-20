const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: (config) => {
    config.resolve.extensions = ['.vue', '.js']

    config.module.rules.unshift({
      test: /\.svg$/,
      loader: 'svg-inline-loader?idPrefix=svg_item',
    })

    config.module.rules.push({
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    })
    return config;
  }
}
