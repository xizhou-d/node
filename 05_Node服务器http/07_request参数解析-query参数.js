const http = require('http')
const url = require('url')
const qs = require('querystring')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // 1. 参数一： query 类型参数
    // 1.1 解析 url
    const urlString = req.url
    const urlInfo = url.parse(urlString )

    // 1.2 解析 query
    const queryInfo =  qs.parse(urlInfo.query)
    console.log('queryInfo', queryInfo )

    res.end('Hello world')
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})