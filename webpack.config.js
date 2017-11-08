const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        })
    ]
};
