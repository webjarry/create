module.exports = {
    devServer: {
        proxy: {
            '/jztk': {
                target: 'http://v.juhe.cn',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
