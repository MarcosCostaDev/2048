const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
    ])
  ],
  devtool: "source-map",
  mode: 'development'
};