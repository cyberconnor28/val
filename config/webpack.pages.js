const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'buttons']),

  createPages('./src/pages/hello.html', './pages/hello.html', ['index', 'buttons']),
  createPages('./src/pages/hearts.html', './pages/hearts.html', ['index', 'buttons'])
]

module.exports = htmlPages