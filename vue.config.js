module.exports = {
    publicPath:'vue_homework',
    //配置axios跨域請求
    devServer: {
        proxy: {
            '/api': {
                //訪問路徑，可以自己設定，
                target: 'https://toyz23.com', //代理介面，即請求的url的字首
                changeOrigin: true, //設定是否跨域，開啟代理：在本地會建立一個虛擬服務端，然後傳送請求的資料，並同時接收請求的資料，這樣客戶端端和服務端進行資料的互動就不會有跨域問題
                ws: true, // 是否啟用websockets
                pathRewrite: {
                    //訪問路徑重寫
                    '^/api': '',
                },
            },
        },
    },
};
