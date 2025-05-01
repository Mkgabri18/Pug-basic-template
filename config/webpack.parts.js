const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
};

exports.clean = () => ({
    output: {
      clean: true,
    },
});

exports.page = ({ title }) => ({
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ["pug3-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/templates/views/index.pug'
    })
  ],
});
exports.loadCSS = () => ({
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader"
        ] 
      },
    ],
  },
});


exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            "css-loader"
          ].concat(loaders),
        },
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            "css-loader",
            "sass-loader"
          ].concat(loaders),
          // sideEffects: true, // utils for code as a package
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};

exports.loadJavaScript = () => ({
  module: {
    rules: [
      // Consider extracting include as a parameter
      { 
        test: /\.js$/, 
        include: PATHS.src,
        exclude: (path) => path.match(/node_modules/),
        use: "babel-loader" 
      },
    ],
  },
});

exports.devServer = () => ({
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
});

exports.minifyJavaScript = () => ({
  optimization: { minimizer: [new TerserPlugin()] },
});


exports.generateSourceMaps = ({ type }) => ({ devtool: type });

