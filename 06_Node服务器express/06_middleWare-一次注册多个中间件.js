const express = require('express')

const app = express()

// app.get(路径，中间件1， 中间件2， 中间件3)
app.get('/home', (req, res, next) => {
    console.log('match method:get path: "/home" middleWare 01')
    next()
}, (req, res, next) => {
    console.log('match method:get path: "/home" middleWare 02')
    next()
}, (req, res, next) => {
    console.log('match method:get path: "/home" middleWare 03')
    next()
}, (req, res, next) => {
    console.log('match method:get path: "/home" middleWare 04 ')
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})