const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ExtractText = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

const dirNodeModules = 'node_modules';
const dirAPP = path.join(__dirname, 'src/app');
const dirAssets = path.join(__dirname, 'src/assets');

const packageJson = require('./package.json')

var config = {
    entry: {
        bundle: path.join(dirAPP, 'index')
    },
    resolve: {
        modules: [
            dirNodeModules,
            dirAPP,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            devMode: devMode
        }),
        new HTMLWebpackPlugin({
            template: path.join('src', 'index.html'),
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: packageJson.name + '.[chunkhash].min.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        },
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file?=name/fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:8].[ext]',
                        pluginPath: dirAssets + '/images/',
                        outputPath: dirAssets + '/images/'
                    }
                }]
            }]
    }
}

module.exports = config;