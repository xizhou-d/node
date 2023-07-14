const express = require('express')

const app = express()

// 给 express 创建的 app 传入一个函数，这个函数就是一个中间件
app.post('/login', (req, res, next ) => {
    // 1. 中间件中可以执行任意代码
    // 打印
    // 查询数据
    // 判断逻辑

    // 2. 在中间件中修改 req/res 对象
    req.age = 99

    // 3. 可以在中间件中结束响应周期
    // res.json({
    //     message: '登陆成功, welcome back',
    //     code: 0
    // })

    // 4. 执行下一个中间件
    next()
})

app.use((req, res, next) => {
    console.log('中间件01')
})

app.listen(9000, () => {
    console.log('服务器启动成功')
})