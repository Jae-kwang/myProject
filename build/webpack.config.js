const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: resolve('src/main.js'),
    resolve: {
        modules: [resolve('src'), 'node_modules'],
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        }
    },
    output: {
        path: resolve('dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: resolve('src/index.html') },
        ])
    ]
}
