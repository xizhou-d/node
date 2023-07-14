const express = require('express')

// 创建 app 对象
const app = express()

// 内置的中间件，直接将文件夹作为静态资源
app.use(express.static('./uploads'))

// 编写中间件
app.post('/login', (req, res, next) => {
    
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})