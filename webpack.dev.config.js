var webpack = require('webpack');

// The path module provides utilities for working with file
//  and directory paths. It can be accessed using:
// See: https://nodejs.org/docs/latest/api/path.html
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000/',
    'webpack/hot/only-dev-server',
    './src/App.jsx' // If No Filename (./src/), its gonna look for `index.js`
  ],

  // Production details
  output: {
    // When compiled for production, output file location
    path: path.join(__dirname, 'public'),
    publicPath: "/",
    filename: 'bundle.js' // Its convention to use this name
  },

  // Bundle lookup dir for included/imported modules
  // By default, bundler/webpack with search here for the scripts
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-3']
      }
    ]
  },
    
node: {
  fs: "empty"
}, 

   // Server configs 
   // See https://webpack.js.org/configuration/dev-server/
   devServer: {
     port: 3000,
     contentBase: './src' // Location where index.html is supposed to be present
   }, 

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // For live reloading
    new webpack.NoErrorsPlugin(), // Makes sure Webpack will not compile if Errors

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ]
};