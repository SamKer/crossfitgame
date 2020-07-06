module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
      disableHostCheck: true,
      https: false
    },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  pwa: {
        // configure the workbox plugin
        // workboxPluginMode: 'InjectManifest',
        // workboxOptions: {
        //     // swSrc is required in InjectManifest mode.
        //     swSrc: 'public/service-worker.js',
        //     // ...other Workbox options...
        // }
    }
};
