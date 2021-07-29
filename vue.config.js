module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/app.scss";`
      }
    }
  },
  lintOnSave: false,
  pwa: {
    themeColor: '#00008b',
    serviceWorker: true
  },
  
};