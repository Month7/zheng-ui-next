const components = require('./components.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

const path = require('path')
// const resolve = dir => path.resolve(__dirname, dir)

const entrys = {}
Object.keys(components).forEach(item => {
  entrys[item] = components[item]
})

const config = {
  mode: 'development',
  entry: entrys,
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.jsx', '.tsx'],
    alias: {
      '@packages': path.resolve(__dirname, 'packages'),
      Templates: path.resolve(__dirname, 'packages'),
    },
  },
  output: {
    path: path.join(__dirname, "./dist"), 
    publicPath: "/",
    libraryTarget: 'umd',
    library: 'zheng-ui-next',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    filename: "[name].js",
    umdNamedDefine: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
      },
    },
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
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.tsx$/,
      use: ['babel-loader']
    }]
  }
}

module.exports = config