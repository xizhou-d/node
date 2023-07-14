const http = require('http')

// 创建一个 http 服务器
const server = http.createServer((request, response) => {
    // request 对象中包含了本次客户端请求中的所有信息
    // 请求的 url
    // 请求的 method
    // 请求的 headers


    // response 用来给客户端返回结果
    response.end('hello world')
})

// 开启对应的服务器，并告知需要监听的端口
// 监听 1024 ~ 65535 之间的端口
server.listen(8000, () => {
    console.log('服务器启动成功')
})