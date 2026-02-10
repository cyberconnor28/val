const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'buttons']),

  createPages('./src/pages/hello.html', './pages/hello.html')
]

module.exports = htmlPages