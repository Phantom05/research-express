


// webpack.config.js
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _path ={
  base:{
    dist:'./public/dist',
    src:'./public/src',
  },
  dist:{
    css:"./public/dist/css",
    js:"'./public/dist/js"
  },
  src:{
    scss:"./public/src/scss",
    js:"./publuc/src/js"
  }
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: 'sass-loader',
            options: {
                // name: `${_path.dist.css}/[name].css`,
                plugins: () => [require('autoprefixer')({
                    'browsers': ['> 10%', 'last 2 versions']
                })],
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      path: path.join(__dirname, 'dist'),
      chunkFilename: "[id].css"
    })
  ]
};