const express = require('express')

// 1. 创建 express 服务器
const app = express()

// 客户端访问URL：/login 和 /home
app.post('/login', (req, res) => {
    res.end('欢迎回来～')
})

app.get('/home', (req, res) => {
    res.end('首页轮播图/推荐数据列表～')
})

// 2. 启动服务器，并监听端口
app.listen(8000, () => {
    console.log('express 服务器启动成功')
}) 