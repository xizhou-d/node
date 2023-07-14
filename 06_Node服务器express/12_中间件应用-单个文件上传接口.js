const express = require('express')
const multer = require('multer')

// 创建 app 对象
const app = express()

// 应用 express 编写的第三方中间件
const upload = multer({
    dest: './uploads'
})

// 编写中间件
// 上传单文件 single
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
    console.log('req.file', req.file)
    res.end('文件上传成功～')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})