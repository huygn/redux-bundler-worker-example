const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  babel: {
    jsx: 'h'
  },
  entry: 'src/main.js',
  html: {
    template: path.resolve('public', 'index.html')
  },
  staticFolder: 'public',
  configureWebpack(config) {
    config.entry['worker'] = path.resolve('src', 'worker.js')
    // fix "window is not defined" when running worker
    // https://github.com/webpack/webpack/issues/6642#issuecomment-371087342
    config.output.globalObject = 'this'
    // disable chunks, somehow this doesn't work when using worker
    config.optimization = {
      splitChunks: {
        chunks(chunk) {
          return false
        }
      }
    }

    config.plugins.push(
      new ManifestPlugin({
        fileName: 'webpack-manifest.json'
      })
    )

    return config
  }
}
