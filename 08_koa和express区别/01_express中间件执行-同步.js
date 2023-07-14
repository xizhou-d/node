const express = require('express')

// 创建 app 对象
const app = express()

// 编写中间件
app.use((req, res, next) => {
    req.msg = 'aaa'
    console.log('express middleWare01')
    next()

    // 返回值结果
    console.log('0000000000')
    res.json(req.msg)
})

app.use((req, res, next) => {
    console.log('express middleWare02')
    req.msg  += 'bbb'
    next()
})

app.use((req, res, next) => {
    console.log('express middleWare03')
    req.msg += 'ccc'
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})