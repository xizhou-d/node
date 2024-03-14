// socket 可以创建客户端，也可以创建服务器

const net = require('net')

var isFirst = true;

/**
 * 返回 socket
 * socket 是一个特殊的文件
 * 在 node 中表现为一个双工流对象
 * 通过向流写入内容发送数据
 * 通过监听流的内容获取数据
 */
const socket = net.createConnection({
    host: 'localhost',
    port: 3000
}, () => {
    console.log('链接成功')
}) 

/**
 * 解析出来响应内容的消息头和消息体
 * @param {*} response 
 */
function parseHeader(response) {
    const index = response.indexOf('\n\r')
    console.log('index', index)

    const header = response.substring(0, index)
    const body = response.substring(index + 2)
    const head = header.split('\r\n')
    console.log('head', head)
    console.log('body', body)
}

socket.on("data", chunk => {
    const response = chunk.toString('utf-8')
    if (isFirst) {
        parseHeader(response)
        isFirst = false
    }
    console.log('来自服务器的消息：', chunk.toString('utf-8'))
    // 如果不是长链接，这里收到信息之后可以挂断
    socket.end()
})

socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`)

socket.on('close', () => {
    console.log('结束了！')
})