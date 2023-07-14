const express = require('express')

const app = express()

// 总结： 当 express 接收到客户端发送的网络请求时，在所有中间件中开始进行匹配
// 当匹配到第一个符合要求的中间件时，就会执行该中间件 
// 后续的中间件是否会执行？ 取决于上一个中间件是否执行了 next()

// 通过 use 方法注册的中间件是最普通/最简单的中间件
// 通过 use 方法注册的中间件，无论是什么请求方式都可以匹配的上
// login/get
// login/post
// abc/patch
app.use((req, res, next) => {
    console.log('normal middleware 01')
    next() 
})

app.use((req, res, next) => {
    console.log('normal middleware 02')
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})