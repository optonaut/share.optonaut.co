var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.sass/,
      loader: 'style!css!autoprefixer!sass'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel?optional=runtime'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  resolve: {
    extensions: ['', '.js']
  }
};
