const express = require('express')

// 创建 app 对象
const app = express()

// 编写中间件
app.post('/login', (req, res, next) => {
    // 1. res.end (比较少用)
    // res.end('登陆成功，欢迎回来')

    // 2. res.json()
    // res.json({
    //     code: 200,
    //     message: '欢迎回来～',
    //     lists: [
    //         {
    //             name: 'apple', price: 12000
    //         },
    //         {
    //             name: 'huawei', price: 7000
    //         },
    //         {
    //             name: 'xiaomi', price: 5000
    //         }
    //     ]
    // })

    // 3. res.status()
    res.status(201)
    res.json('欢迎回来')
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})