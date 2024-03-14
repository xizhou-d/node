const net = require('net')
const crypro = require('crypto')

const server = net.createServer(socket => {
    console.log('有客户端连接到服务器。')

    socket.once('data', chunk => {
        console.log(chunk.toString('utf-8'))
        const htmlContent = chunk.toString('utf-8')
        let parts = htmlContent.split('\r\n').filter(s => s)
        parts.shift()

        // parts => object
        parts = parts.map(s => {
            const index = s.indexOf(':')
            return [s.substring(0, index), s.substring(index + 1).trim()]
        })
        const header = Object.fromEntries(parts)
        console.log('header', header)
        // 开始给客户端响应
        const hash = crypro.createHash('sha1')
        hash.update(header['Sec-WebSocket-Key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
        const key = hash.digest("base64")
        console.log('key', key)
        socket.write(`HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: ${key}

`)
    })

    socket.on('data', chunk => {
        console.log('chunk server', chunk)
    })
})

server.listen(3000)
