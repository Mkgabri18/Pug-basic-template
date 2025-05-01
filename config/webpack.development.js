const path = require('path');

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
};


module.exports = {
  // watch: true,
  output: {
    path: PATHS.dist,
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    // hot: true,
    // compress: true,
    historyApiFallback: true,
    // client: {
    //     overlay: true
    // },
    watchFiles: ['src/**/*.pug', 'src/**/*.js', 'src/**/*.scss']
  },
};