var path = require('path');
var ip = require("ip");

module.exports = {
    outputDir: path.resolve(__dirname, 'backend/public/'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        },
        host: ip.address(),
        hot: true,
        disableHostCheck: true,
    }
}