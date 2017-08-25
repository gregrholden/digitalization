const path = require('path');

module.exports = {
  entry: {
    App: './app/src/scripts/App.js'
  },
  output: {
    path: path.resolve(__dirname, 'app/assets/scripts'),
    filename: 'App.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
