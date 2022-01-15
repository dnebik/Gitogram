module.exports = {
  chainWebpack: (config) => {
    config.devServer.disableHostCheck(true);

    config.resolve.extensions
      .clear()
      .add('.vue')
      .add('.js');

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader?idPrefix=svg_item');
  },
};
