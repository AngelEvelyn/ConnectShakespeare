const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, '/build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
          },
        ],
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
      plugins: [new webpack.HotModuleReplacementPlugin()],
      devServer: {
        contentBase: `${__dirname}/build`,
        hot: true,
    }
};
