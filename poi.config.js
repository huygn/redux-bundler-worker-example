const path = require('path')

module.exports = {
  entry: 'src/main.js',
  html: {
    template: path.resolve('public', 'index.html')
  },
  staticFolder: 'public',
  configureWebpack(config) {
    // fix "window is not defined" when running worker
    // https://github.com/webpack/webpack/issues/6642#issuecomment-371087342
    config.output.globalObject = 'this'

    return config
  }
}
