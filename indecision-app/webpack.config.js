// entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};   

// loader
// @babel/core - babel-cli를 webpack 에서 사용할 수 있게 해줌 
// babel-loader - webpack plugin (teach webpack how run the babel)