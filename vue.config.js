//  vue.config.js

module.exports = {
    publicPath: './',
    devServer: {
        https: false,
        proxy: {
            '/app': {
                target: "http://106.12.209.249:1001/",//这个是全局的环境配置变量，单独建立的文件，以VUE_APP_开头的变量，每个文件中都可以访问，假设这里是http://www.sweeeper.com
                changeOrigin: true
            },
        },
        before: app => {
            // applyMock(app)
        }
    }
}