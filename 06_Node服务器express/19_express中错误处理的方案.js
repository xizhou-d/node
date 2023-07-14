const express = require('express')

// 创建 app 对象
const app = express()

app.use(express.json())

// 编写中间件
// 服务器给客户端返回错误信息的方案
app.post('/login', (req, res, next) => {
    // 1. 获取登陆传入的用户名和密码
    const { username, password }  = req.body
    console.log(typeof password, username === 'xizhou' && password === 123456)

    // 2. 对用户名和密码进行判断
    if (!username || !password) {
        // res.json({
        //     code: -1001,
        //     message: '请输入用户名和密码'
        // })
        next(-1001)
    } else if (username !== 'xizhou' || password !== 123456) {
        // res.json({
        //     code: -1002,
        //     message: '用户名和密码错误，请检查～'
        // })
        next(-1002)
    } else {
        res.json({
            code: 0,
            message: '登陆成功，欢迎回来',
            token: '898989dsf890909'
        })
    }
})

// 错误处理的中间件
app.use((err, req, res, next) => {
    const code = err
    let message = '位置错误发生'
    switch(code) {
        case -1001:
            message = '请输入用户名和密码'
            break
        case -1002:
            message = '用户名和密码错误，请检查～'
            break
    }
    res.json({code, message})
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})