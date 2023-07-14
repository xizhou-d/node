const koa = require('koa')

const app = new koa()

app.use((ctx, next) => {
    // 1. 请求对象
    console.log(ctx.request) // koa 封装的请求对象
    console.log(ctx.res) // node 封装的请求对象

    // 2. 响应对象
    console.log(ctx.response) // koa 封装的响应对象
    console.log(ctx.res) // node 封装的请求对象
})

app.use((ctx, next) => {
    console.log('secondary middleware')
})

app.listen(6000, () => {
    console.log('koa 服务器启动成功～')
})