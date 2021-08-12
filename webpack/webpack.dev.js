const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    target:"web",
    devServer: {
        port: 5000,
        hot: true,
        open: true,
        historyApiFallback:true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:5000',
        //         pathRewrite: { '^/api': '' },
        //         secure: false,
        //         changeOrigin: true,
        //     },
        // },
    },
};
