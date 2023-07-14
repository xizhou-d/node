const express = require('express')

// 创建 app 对象
const app = express()

// 应用中间件
app.use(express.json()) // 解析客户端传过来的 json 数据

// 解析传递过来的 urlencoded 的时候，默认使用的 node 内置 queryString 模块
// { extend: true }: 不再使用内置的 queryString, 而是使用 qs 第三方库
app.use(express.urlencoded()) // 解析客户端传过来的 urlencoded

// 编写中间件
app.post('/login', (req, res, next) => {
    console.log('req.body', req.body)
    res.end('登陆成功～')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})