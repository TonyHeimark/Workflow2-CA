const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'tours.html',
      template: './src/tours.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            esModule: false
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          root: path.resolve(__dirname, 'dist')
        }
      },
      {
        test: /\.scss$/,

        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
};
