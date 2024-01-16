const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		detail: './src/detail/js/detail.js',
		catalog: './src/catalog/js/catalog.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png|svg|jpeg|gif)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			chunks: ['index', 'catalog'],
		}),
		new HtmlWebpackPlugin({
			template: './src/detail/detail.html',
			filename: 'detail.html',
			chunks: ['index', 'detail'],
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		historyApiFallback: true,
	},
}
