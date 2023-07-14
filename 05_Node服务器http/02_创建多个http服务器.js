const http = require('http')

const server1 = http.createServer((req, res) => {
    res.end('2000端口服务器返回的结果～')
})
server1.listen(2000, () => {
    console.log('2000端口服务器启动了')
})

const server2 = http.createServer((req, res) => {
    res.end('4000端口服务器返回的结果～')
})
server2.listen(4000, () => {
    console.log('4000端口服务器启动了')
})