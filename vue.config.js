module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
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
    name: 'Sei ein Held',
    themeColor: '#FBFF00',
    msTileColor: '#FBFF00',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',

    manifestOptions: {
      name: 'Sei ein Held - rette die Welt',
      short_name: 'Sei ein Held',
      background_color: '#FBFF00',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },

        {
          src: './img/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './img/icons/mstile-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        }
      ]
    },
    workboxOptions: {
      // https://github.com/yyx990803/register-service-worker/issues/14
      // https://stackoverflow.com/questions/54145735/vue-pwa-not-getting-new-content-after-refresh
      skipWaiting: true
    }
  }
}
