const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.end('登陆成功')
    } else if (req.url === '/products') {
        res.end('产品列表')
    } else if (req.url === '/lyrics') {
        res.end('歌词数据')
    }
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
}) 