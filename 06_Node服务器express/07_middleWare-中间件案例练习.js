const express = require('express')

const app = express()

// 1. 注册连个普通的中间件
app.use((req, res, next) => {
    console.log('normal middleWare 01')
    next()
})

app.use((req, res, next) => {
    console.log('normal middleWare 02')
    next()
})

// 2. 注册路径/方法匹配的中间价
app.get('/home', (req, res, next) => {
    console.log('match methos: get path: "/home" middleWare 01')
    next()
}, (req, res, next) => {
    console.log('match methos: get path: "/home" middleWare 02')
    next()
})

app.post('/login', (req, res, next) => {
    console.log('match method: post path: "/login" middleWare 01')
})

// 3. 注册普通的中间件
app.use((req, res, next) => {
    console.log('normal middleWare 03')
    next()
})

app.use((req, res, next) => {
    console.log('normal middleWare 04')
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})