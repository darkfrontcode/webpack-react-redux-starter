var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.css', '.styl', '.json']
	},
	entry: path.join(__dirname, 'source/react/main.js'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader?name=assets/[name].[ext]"
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "source/html/template.html")
		}),
		new webpack.BannerPlugin("{name:['Ueslei de Souza'], link:['https://github.com/udsndesign']}"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name].css")
	]
}
