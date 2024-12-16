const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',  // Use ts-loader to transpile TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',  // You can also use babel-loader if needed
      },
    ],
  },
  devtool: 'source-map',  // Optional for debugging
};
