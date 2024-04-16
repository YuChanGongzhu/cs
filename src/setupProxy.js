const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {                        //遇见/api前缀的请求，就会触发该代理配置
            target: 'http://localhost:7890',   //请求转发给谁

            // 如果没有手动设置为true，该属性默认为false
            // 在本文中false状态下服务端获取到的Host请求来自于3000端口
            // true状态下Host请求来自于5000端口
            // 成功欺骗到了服务器 :)
            changeOrigin: true,                //控制服务器收到的请求头中Host的值

            // 在请求路径中加上了/api的路径触发代理    
            // 但是在后端访问路径中没有/api/xxx的说法
            // 所以需要在请求触发后将/api的路径删掉即改为空字符串
            pathRewrite: { '^/api1': '' }         //重写请求路径
        })

        // 在use中可以设置多个proxy代理
        // proxy('/api2',{ 
        //     xxxx 
        // }),
        // proxy('/api3',{ 
        //     xxxx 
        // })
    )
}