const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    console.log('req.headers', req.headers)
    res.end('查看 headers 信息')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})