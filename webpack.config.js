
const { merge } = require("webpack-merge");
const parts = require("./config/webpack.parts.js");

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { WebpackPluginServe } = require("webpack-plugin-serve");

const commonConfig = merge([
  { entry: ["./src/app.js"] },
  parts.clean(),
  parts.page({ title: "Demo" }),
  // parts.loadCSS(),
  parts.extractCSS(),
  parts.loadJavaScript(),
]);


const productionConfig = merge([
  parts.minifyJavaScript(),
  parts.generateSourceMaps({ type: "source-map" }),
]);

const developmentConfig = merge([
  // { entry: ["webpack-plugin-serve/client"] },
  parts.devServer(),
]);

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = (env, argv) => getConfig(argv.mode);

// const config = {
//     watch: mode === "development",
//     entry: { app: './src/app.js'},
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "[name].bundle.js",
//     },
//     devServer: {
//         port: 3000,
//         open: true,
//         historyApiFallback: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './src/templates/views/index.pug'
//         }),
//         new WebpackPluginServe({
//           port: parseInt(process.env.PORT, 10) || 8080,
//           static: "./dist",
//           liveReload: true,
//           waitForBuild: true,
//         }),
//     ],
//     module: {
//         rules: [
//           { 
//             test: /\.pug$/,
//             use: ["pug-loader"]
//           },
//           {
//             test: /\.scss$/,
//             use: [
//               {loader: 'style-loader'},
//               {loader: 'css-loader'},
//               {loader: 'sass-loader'}
//             ]
//           }
//         ]
//     }
// }

// module.exports = (env, argv) => {
//     if (argv.mode === 'development') {}
//     if (argv.mode === 'production') {}
//     return config;
// }