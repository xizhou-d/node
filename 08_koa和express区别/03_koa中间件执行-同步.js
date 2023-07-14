const koa = require('koa')
const axios = require('axios')

const app = new koa()

app.use((ctx, next) => {
    console.log('middleWare 01')
    ctx.ms = 'aaa'
    next()

    // 返回结果
    console.log('0000000')
    ctx.body = ctx.ms
})

app.use((ctx, next) => {
    console.log('middleWare 02')
    ctx.ms += 'bbb'
    next()
    console.log(1111111)
})

app.use((ctx, next) => {
    console.log('middleWare 03')

    // 网络请求
    console.log(first)
    ctx.ms += 'ccc'
})

app.listen(8000, () => {
    console.log('koa 服务器启动～')
})