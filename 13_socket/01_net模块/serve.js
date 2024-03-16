const net = require('net')
const fs = require('fs')
const path = require('path')

const server = net.createServer()

server.listen(3000)

server.on('listening', () => {
    console.log('server listen 3000.')
})

server.on('connection', socket => {
    console.log('有客户端连接到服务器。')

    socket.on('data', async (chunk) => {
        const filename = path.resolve(__dirname, './shihao.jpeg')
        const bodyBuffer = await fs.promises.readFile(filename)
        const headerBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`, 'utf-8')

        const result = Buffer.concat([headerBuffer, bodyBuffer])

        socket.write(result)
        socket.end()
    })

    socket.on('end', () => {
        console.log('链接断开了')
    })
})