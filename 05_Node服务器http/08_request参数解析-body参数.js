const http = require('http')
const url = require('url')
const qs = require('querystring')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // 获取参数：body 参数
    req.setEncoding('utf-8')

    let isLogin = false
    req.on('data', (data) => {
        const loginInfo = JSON.parse(data)

        if (loginInfo.name === 'xizhou' && loginInfo.age === 18) {
            isLogin = true
        } else {
            isLogin = false
        }
    })

    req.on('end', () => {
        if (isLogin) {
            res.end('登陆成功，欢迎回来～')
        } else {
            res.end('账号或者密码错误，请检查')
        } 
    })
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务 器已启动～')
})