const path = require('path');
// 渲染页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 模拟数据
const mockServer = require('./mork/server');
const root = __dirname;

console.log('root');
console.log(root);
module.export = {
    // entry 让webpack知道以哪个模块为入口，做依赖收集
    entry: './src/index.js',
    // 告诉webpack 打包好的文件放在哪里以及命名
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
                exclude: '/node_modules/',
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            //  template: './src/index.html'
            title: 'React Demo',
            template: path.resolve(root, './src/index.html')
        })
    ],
    devServer: {
        before: (app) => {
            mockServer(app);
        }
    }
}
