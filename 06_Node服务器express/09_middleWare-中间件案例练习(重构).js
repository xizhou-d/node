const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', data => {
//             const info = JSON.parse(data.toString())
//             req.body = info
//         })

//         req.on('end', () => {
//             next()
//         })
//     } else {
//         next()
//     }
// })

// 直接使用 express 提供的中间件
app.use(express.json())

// 注册两个实际请求的中间件
// 1. 案例一：用户登录的请求处理 /login post => username/password
app.post('/login', (req, res, next) => {
    console.log(req.body)
})

// 2. 案例二：注册用户的请求处理 /register post => username/password
app.post('/registor', (req, res, next) => {
    console.log(req.body)
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})