module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://mentos126.github.io/' : '/',
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
