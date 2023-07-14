const http = require('http')
const fs = require('fs')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    // 创建 wirtable stream
    const writeStream = fs.createWriteStream('./shihao.jpeg', {
        flags: 'a+'
    })
    // 客户端传递的数据是表单数据（请求体）
    // req.on('data', (data) => {
    //     console.log('data', data)
    //     writeStream.write(data)
    // })

    req .pipe(writeStream)
    req.on('end', () => {
        res.end('文件上传成功')
        writeStream.close()
    })
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})