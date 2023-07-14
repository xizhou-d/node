const express = require('express')
const multer = require('multer')

// 创建 app 对象
const app = express()

// 应用 express 编写的第三方中间件
const upload = multer({
    // dest: './uploads' // 文件没有后缀名

    // 自定义文件名称
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, './uploads')
        },
        filename(req, file, callback) {
            callback(null, Date.now() + '_' + file.originalname)
        }
    })
})

// 编写中间件
// 上传单文件 single
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
    console.log('req.file', req.file)
    res.end('文件上传成功～')
})

// 上传多文件
app.post('/photos', upload.array('photos'), (req, res, next) => {
    console.log('req.files', req.files)
    res.end('上传多张图片成功~')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})