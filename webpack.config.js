const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const development = {
  devtool: 'source-map',
  entry: './src/js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({
                browsers: ['ie >= 8', 'last 4 version'],
              }),
              ],
            },
          }, 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css'),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};

const production = {
  plugins: [
    new UglifyJsPlugin(),
  ],
};

module.exports = env => ((env === 'development') ? development : merge([
  development,
  production,
]));

