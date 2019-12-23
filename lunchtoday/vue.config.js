var path = require('path');
var ip = require("ip");

module.exports = {
    outputDir: path.resolve(__dirname, 'backend/public/'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://42.243.134.40:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        host: ip.address(),
        hot: true,
        disableHostCheck: true
    }
}