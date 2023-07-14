const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // 设置数据类型和数据编码格式
    // 1. 方式一： 单独设置某一个 header
    // res.setHeader('Content-Type', 'text/plain;charset=utf8')

    // 2. 方式二：和 http statusCode 一起设置
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf8'
    })

    const lists = [
        { name: 'why', age:18 },
        { name: 'xizhou', age: 22 }
    ]
    res.end(JSON.stringify(lists))
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})