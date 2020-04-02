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
  }
};
