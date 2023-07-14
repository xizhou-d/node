const express = require('express')
const multer = require('multer')

// 创建 app 对象
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const formdata = multer()
// 编写中间件
app.post('/login', formdata.any(), (req, res, next) => {
    console.log('req.body', req.body)
    res.end('登陆成功，欢迎回来')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})