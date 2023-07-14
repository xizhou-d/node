const express = require('express')

const app = express()

// 注册普通的中间件
// app.use((req, res, next) => {
//     console.log('match normal middleWare')
//     res.end('--------')
// })

// 注册路径匹配的中间件
// 路径匹配的中间件不会被请求方式（method）所限制
app.use('/home', (req, res, next) => {
    console.log('match home middleWare.')
    res.end('909090')
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})