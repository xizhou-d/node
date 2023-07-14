const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // 响应状态吗
    // 1. 方式一：statusCode
    // res.statusCode = 201

    // 2. 方式二：setHead 响应头
    res.writeHead(401)
    res.end('Hello world')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})