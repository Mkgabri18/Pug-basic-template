const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: { minimizer: [new TerserPlugin()] },  
    devtool: "source-map" 
}


