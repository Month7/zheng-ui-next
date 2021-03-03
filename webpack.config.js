// import { VueLoaderPlugin } from 'vue-loader'

const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

const path = require('path')

const config = {
  mode: 'development',
  entry: {
    index: './packages/button/index.js',
    test: './packages/layout/index.js'
  },
  output: {
    path: path.join(__dirname, "./output/lib"), 
    publicPath: "/output/lib",
    filename: "[name].js"
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}

module.exports = config