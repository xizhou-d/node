const express = require('express')
const fs = require('fs')
const morgan = require('morgan')

// 创建 app 对象
const app = express()

// 应用第三方中间件
const writeStream = fs.createWriteStream('./logs/access.log')
app.use(morgan('combined', { stream: writeStream }))

// 编写中间件
app.post('/login', (req, res, next) => {
    res.end('登陆成功～')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})