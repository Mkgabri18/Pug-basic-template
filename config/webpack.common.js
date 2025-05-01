const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
};

module.exports = {
    entry: ["./src/app.js"],
    output: {
        clean: true,
    },
    module: {
        rules: [
          { 
            test: /\.pug$/,
            use: ["pug3-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              "css-loader",
              "sass-loader"
            ],
            // sideEffects: true, // utils for code as a package
          },
          { 
            test: /\.js$/, 
            include: PATHS.src,
            exclude: (path) => path.match(/node_modules/),
            use: "babel-loader" 
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/views/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
}
