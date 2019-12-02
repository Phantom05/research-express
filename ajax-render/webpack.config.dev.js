const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  // enntry file
  entry: [
    '@babel/polyfill',
    './public/src/js/main.js',
    './public/src/scss/main.scss',
    // './views/index.ejs'
  ],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // js
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'public/src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader",   // translates CSS into CommonJS
          "sass-loader"   // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.ejs$/,
      //   use: [
      //     {
      //       loader: "ejs-webpack-loader",
      //       options: {
      //         data: { title: "New Title", someVar: "hello world" },
      //         htmlmin: true
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, "./dist/"),
    // port: 9000
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    // new MiniCssExtractPlugin({ filename: 'css/style.css' })
    // new CopyWebpackPlugin([
    //   { from: 'views', to: './public/src/views' }
    // ])
    // new BundleAnalyzerPlugin(),
    // new HtmlWebpackPlugin({
    //  title: 'Project Demo',
    //  minify: {
    //   collapseWhitespace: true
    //  },
    //  hash: true,
    //  template: './src/index.html'
    // })
  ],
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};