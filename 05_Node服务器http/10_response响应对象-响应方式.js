const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // res: response 对象 => writable 可写流
    // 响应方式一：write
    res.write('11111')
    res.write('22222')
    res.end('本次写出已经结束')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})