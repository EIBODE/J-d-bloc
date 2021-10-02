module.exports = {
  publicPath: 'https://mentos126.github.io/my-kyhoot/',
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_main.scss";
        `
      }
    }
  }
}
