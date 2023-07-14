const express = require('express')

const app = express()

// 注册两个实际请求的中间件
// 1. 案例一：用户登录的请求处理 /login post => username/password
app.post('/login', (req, res, next) => {
    let isLogin = false
    req.on('data', (data) => {
        const dataString = data.toString()
        const dataInfo = JSON.parse(dataString)
        console.log('dataInfo', dataInfo)
        const { name, password } = dataInfo
        if (name === 'xizhou' && password === 123456) {
            isLogin = true
        } else {
            isLogin = false
        }
    })

    req.on('end', () => {
        if (isLogin) {
            res.end('登陆成功，欢迎回来～')
        } else {
            res.end('登陆失败，请检测账号和密码是否正确')
        }
        
    })
})

// 2. 案例二：注册用户的请求处理 /register post => username/password
app.post('/registor', (req, res, next) => {
    let isRegistor = false
    req.on('data', (data) => {
        const dataString = data.toString()
        const dataInfo = JSON.parse(dataString)
        console.log('dataInfo', dataInfo)

        // 查询数据库中该用户是否已经被注册
        isRegistor = true
    })

    req.on('end', () => {
        if (isRegistor) {
            res.end('注册成功，开始您的旅程～')
        } else {
            res.end('注册失败，请检测账号和密码是否正确')
        }
        
    })
    
})

app.listen(9000, () => {
    console.log('服务器启动成功～')
})