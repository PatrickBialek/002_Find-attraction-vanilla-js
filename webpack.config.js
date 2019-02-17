const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader", options: { url: false } }, { loader: "sass-loader", options: { url: false } }]
			}
		]
	}
};
