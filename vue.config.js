module.exports = {
  indexPath: 'index.html',
  outputDir: 'dist/',
  devServer: {
    host: process.env.VUE_APP_LOCALHOST,
  },
  css: {
    loaderOptions: {
      sass: {
        // Whatever you do, do not remove the semicolon in the import statement below
        // or everything blows up…
        additionalData: '@import "@/styles/config_assets_vars.scss";',
      },
    },
  },
};
