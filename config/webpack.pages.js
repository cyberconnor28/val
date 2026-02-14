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
  createPages('./src/index.html', './index.html', ['index']),

  createPages('./src/pages/hello.html', './pages/hello.html', ['index', 'buttons']),
  createPages('./src/pages/hearts.html', './pages/hearts.html', ['index', 'buttons']),
  createPages('./src/pages/time.html', './pages/time.html', ['index', 'buttons', 'time']),
  createPages('./src/pages/mail.html', './pages/mail.html', ['index', 'buttons']),
  createPages('./src/pages/music.html', './pages/music.html', ['index', 'buttons']),
  createPages('./src/pages/we.html', './pages/we.html', ['index', 'buttons', 'we']),
  createPages('./src/pages/spisok.html', './pages/spisok.html', ['index', 'buttons', 'drag'])
]

module.exports = htmlPages