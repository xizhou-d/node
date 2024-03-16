const path = require('path')
const http = require('http')
const express = require('express')

const app = new express()
const server = http.createServer(app)
app.use(express.static(path.resolve(__dirname, '../public')))

require('./chatServer')(server)

server.listen(3000, () => {
    console.log('服务器已经启动')
})