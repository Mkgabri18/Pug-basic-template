
const { merge } = require("webpack-merge");


const getConfig = (mode) => {
  const commonConfig = require('./config/webpack.common');
	const config = require('./config/webpack.' + mode);
	return merge(commonConfig, config);
};

module.exports = (env, argv) => getConfig(argv.mode);
