const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    console.log('服务器被访问了')
    res.end('Hello world')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})