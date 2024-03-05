'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/thismain.js',
  output: {
    filename: 'thismain.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9090,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html'})
  ],
  module: {
    rules: [
      {
    
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {loader: "babel-loader"},
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer','@babel/plugin-transform-runtime'
                ]
              },
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        ]
      }
    ]
  }
}
