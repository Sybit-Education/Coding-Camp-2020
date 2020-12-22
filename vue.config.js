module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  productionSourceMap: false,
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {}
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      sass: {
        prependData: `
          @import '@/assets/custom-vars.scss';
          @import '@/assets/_variables.scss';
          @import '~bootstrap/scss/bootstrap.scss';
          @import '~bootstrap-vue/src/index.scss';
        `
      }
    }
  },
  pwa: {
    name: 'Sei ein Held - rette die Welt',
    shortName: 'Sei ein Held',
    themeColor: '#FBFF00',
    msTileColor: '#FBFF00',
    appleMobileWebAppCache: 'yes',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    }
  }
}
