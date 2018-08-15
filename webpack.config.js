const path = require('path');

// Action generators - functions that return action objects

const incrementCount = () => ({
  type: 'INCREMENT'
});


module.exports = {
	entry: './src/app.js', // entry file for our app.
	output: { 						 // output for the js generated
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader', // converts jsx to browser readable javascript.
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, // converts scss
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // since everything is read from the bundled file, errors can't be pointed out. This helps to point the file having the error.
  devServer: { // webpack dev server
    contentBase: path.join(__dirname, 'public'), // serves public directory
    historyApiFallback: true
  }
}