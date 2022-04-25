const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')
const path = require('path')
const nunjucksPages = require('../plugin/nunjucks-pages')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        filename: 'assets/js/index.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
        [
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery'
            // }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "./src/assets/favicon", to: "assets/favicon" },
                    { from: "./src/assets/img", to: "assets/img" },
                    { from: "./src/assets/js/lib/swiper.js", to: "assets/js/[name].js" },
                    { from: "./src/assets/js/lib/barba.js", to: "assets/js/[name].js" },
                    { from: "./src/assets/js/lib/jquery.blast.min.js", to: "assets/js/[name].js" },
                    { from: path.resolve(__dirname, '../static') }
                ],
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist'] },
                notify: false
            }),
            new MiniCSSExtractPlugin({
                filename: "assets/css/[name].css",
                chunkFilename: "assets/css/[id].css",
            }),
            ...nunjucksPages.generatePages(path.resolve(__dirname, path.join(__dirname, '../src/view/pages'))),
        ],
    module:
    {
        rules:
            [
                // HTML
                {
                    test: /\.(html)$/,
                    use: ['html-loader']
                },

                // JS
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:
                        [
                            'babel-loader'
                        ]
                },

                // SASS
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },

                // Images
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    loader: 'file-loader',
                    options:
                    {
                        outputPath: 'assets/img/'
                    }
                },

                // Fonts
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use:
                        [
                            {
                                loader: 'file-loader',
                                options:
                                {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/font/'
                                }
                            }
                        ]
                },

                // Shaders
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    exclude: /node_modules/,
                    use: [
                        'raw-loader',
                        'glslify-loader'
                    ]
                }
            ]
    }
}
