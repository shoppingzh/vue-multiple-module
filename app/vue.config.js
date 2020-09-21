
const { resolve }  = require('path')

module.exports = {
  publicPath: 'dist',
  pages: {
    admin: {
      entry: 'src/pages/admin/main.js',
      filename: 'admin.html'
    },
    portal: {
      entry: 'src/pages/portal/main.js',
      filename: 'portal.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@admin': resolve('src/pages/admin'),
        '@portal': resolve('src/pages/portal')
      }
    }
  }
}