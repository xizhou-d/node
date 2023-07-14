const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    console.log('服务器被访问了')

    // request 对象中包含哪些信息
    // 1. url 信息
    console.log('req.url', req.url)

    // 2. method 请求方式
    console.log('req.method', req.method)

    // 3. headers 信息
    console.log('req.headers', req.headers)
    res.end('Hello world')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})  