const express = require('express')

// 创建 app 对象
const app = express()

// 编写中间件
// 1. 解析 queryString 参数
app.get('/home/list', (req, res, next) => {
    console.log('req.query', req.query)
    res.end('list data')
})

// 2. 解析 params 参数
app.get('/users/:id', (req, res, next) => {
    console.log('req.params', req.params)
    const id = req.params.id
    res.end(`获取到${id}的数据`)
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})