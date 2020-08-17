const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    
                ]
            },
            { test: /\.(png|svg|jpe?g|gif|woff2?|ttf|eot)$/, use: [ 'file-loader' ] },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        })
    ]
};