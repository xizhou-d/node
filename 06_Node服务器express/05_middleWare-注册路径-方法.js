const express = require('express')

const app = express()

// 注册中间件, 对 path/method 都有限制
// app.method(path, middleWare)
app.get('/home', (req, res, next) => {
    console.log('match method:get path: "/home" middleWare')
    res.end('method&&path: get&&/home')
})

app.post('/users', (req, res, next) => {
    console.log('match method:post path: "/users" middleWare')
    res.end('method&&path: get&&/home')
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})