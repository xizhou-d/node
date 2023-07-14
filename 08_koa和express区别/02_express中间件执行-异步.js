const express = require('express')
const axios = require('axios')

// 创建 app 对象
const app = express()

// 编写中间件
app.use(async (req, res, next) => {
    req.msg = 'aaa'
    console.log('express middleWare01')
    await next()

    // 返回值结果
    console.log('0000000000')
    // res.json(req.msg)
})

app.use(async (req, res, next) => {
    console.log('express middleWare02')
    req.msg  += 'bbb'
    await next()
})

// 执行异步代码
app.use(async (req, res, next) => {
    console.log('express middleWare03')
    const resData = await axios.get('http://123.207.32.32:8000/home/multidata')
    console.log('11111111')
    req.msg += resData.data.data.banner.list[0].title

    // 只能在这里返回结果 
    res.json(req.msg)
})

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})