const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname + '/src/main.js'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'taiwan-vue-components.min.js',
        libraryTarget: 'umd',
        library: 'taiwan-vue-components',
        umdNamedDefine: true
    },
    externals: {
        d3: 'd3',
        topojson: 'topojson-client'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
}