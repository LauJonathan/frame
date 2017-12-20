module.exports = {
	devtool: 'eval-source-map',
  	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/public",//打包后的文件存放的地方
    	filename: "bundle.js"//打包后输出文件的文件名
  	},
  	devServer: { // webpack-dev-server
	    contentBase: "./public", // 本地服务器所加载的页面所在的目录，想为另外目录提供服务，则设置其目录
	    historyApiFallback: true, // 不跳转，为true所有跳转指向index.html
	    port: "8089", //默认8080
		inline: true // 源代码改变，实时刷新
	},
	module: { // loaders,解析不可直接运行的文件成可运行文件
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: { // babel的配置选项，详细信息，这里可以写在.babelrc中
                        presets: [
                            "env", "react" // babel包中的子包名
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
  	// __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
}
// https://segmentfault.com/a/1190000006178770#articleHeader0