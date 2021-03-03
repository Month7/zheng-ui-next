// import { VueLoaderPlugin } from 'vue-loader'

const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

const path = require('path')
// const resolve = dir => path.resolve(__dirname, dir)

const config = {
  mode: 'development',
  entry: {
    index: './packages/index.ts',
    test: './packages/layout/index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.jsx', '.tsx'],
    alias: {
      '@packages': path.resolve(__dirname, 'packages'),
      Templates: path.resolve(__dirname, 'packages'),
    },
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
      loader: 'vue-loader',
      
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}

module.exports = config