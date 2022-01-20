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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    }

    config.resolve.extensions = ['.vue', '.js']

    config.module.rules = config.module.rules.map(rule => {
      if (String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)) {
        return { ...rule, test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/, }
      }
      return rule
    })

    config.module.rules.push({
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
