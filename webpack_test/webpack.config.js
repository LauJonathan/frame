const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
  	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/build",//打包后的文件存放的目录
    	filename: "bundle.js"//打包后输出文件的文件名
  	},
  	devServer: { // webpack-dev-server
	    contentBase: "./build", // 本地服务器所加载的页面所在的目录，想为另外目录提供服务，则设置其目录
	    historyApiFallback: true, // 不跳转，为true所有跳转指向index.html
	    port: "8089", //默认8080
		inline: true, // 源代码改变，实时刷新
        hot: true
	},
    // eslint: {
    //     configFile: './.eslintrc'
    // },
	module: { // loaders,解析不可直接运行的文件成可运行文件
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: "babel-loader"
                        // options: { // babel的配置选项，详细信息，这里可以写在.babelrc中
                        //     presets: [
                        //         "env", "react" // babel包中的子包名
                        //     ]
                        // }
                    },
                    {
                        loader: "react-hot!babel"
                    },
                    {
                        loader: "eslint-loader"
                    }
                ],
                // loaders: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: ["babel-loader", "eslint-loader"],
                // use: {
                //     loader: "eslint-loader"
                // },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader", // 可使用import,require等引用css
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [ // 插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务
    	new webpack.BannerPlugin('版权所有，翻版必究'), // webpack自带的插件
    	new HtmlWebpackPlugin({ // 可生成一个自动引用你打包后的JS文件的新index.html，不需要自建访问目录public，可自动生成构建后的目录
            template: __dirname + "/app/index.tmpl.html" // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ]
  	// __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
}
// https://segmentfault.com/a/1190000006178770#articleHeader0