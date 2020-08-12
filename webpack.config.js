const path = require('path');
 module.exports = {
  // define entry file and output
      entry: './src/index.js',
      output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    // define babel loader
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
            {
                test: /\.png$/,
                loader: 'url-loader',
                query: { mimetype: 'image/png' }
            },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};