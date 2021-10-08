module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? 'https://eibode.github.io/J-d-bloc/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://mentos126.github.io/my-kyhoot/' : '/',
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
