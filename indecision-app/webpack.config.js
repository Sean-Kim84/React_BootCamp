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
    devtool: 'cheap-module-eval-source-map', // chrome에서 어디에 error가 발생했는지 정확하게 알려준다
    devServer: {
        contentBase: path.join(__dirname, 'public') // package.json 에 명령어설정해야 한다
    }
};   

// loader
// @babel/core - babel-cli를 webpack 에서 사용할 수 있게 해줌 
// babel-loader - webpack plugin (teach webpack how run the babel)