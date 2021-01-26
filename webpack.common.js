const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
    app: path.join(__dirname, 'src', 'js', 'app.js')
  },

  output: {
    path: path.join(__dirname, 'dist')
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new AssetsPlugin({
      filename: 'webpack.json',
      removeFullPathAutoPrefix: true,
      path: path.join(process.cwd(), 'site/data'),
      prettyPrint: true
    })
  ]
}
