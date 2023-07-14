const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    console.log('method', method)
    if (url === '/login') {
        if (method === 'POST') {
            res.end('登陆成功')
        } else {
            res.end('不支持的请求方式, 请检测你的请求方式')
        }
    } else if (url === '/products') {
        res.end('产品列表')
    } else if (url === '/lyrics') {
        res.end('歌词数据')
    }
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
}) 