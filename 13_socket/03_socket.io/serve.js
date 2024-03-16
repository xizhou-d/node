const express = require('express');
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')

// express
const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname, 'public')))

// websocket
const io = socketIO(server);
io.on('connection', (socket) => {
    // 当有一个新的客户端连接到服务器成功之后触发的事件
    console.log('新的客户端连接进来了')
    const timer = setInterval(() => {
        // 服务端发送消息给客户端
        socket.emit('test', 'message from server.')
    }, 2000)
    // 服务端接收客户端发来的消息
    socket.on('msg', chunk => {
        console.log(chunk.toString('utf-8'))
    })

    // 断开连接的时候取消timer
    socket.on('disconnect', () => {
        clearInterval(timer)
        console.log('server linsten closed')
    })
})

// app.get('/', (req, res) => {
//     console.log(111111111)
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});