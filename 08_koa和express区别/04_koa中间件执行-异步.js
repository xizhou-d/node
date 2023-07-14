const koa = require('koa')
const axios = require('axios')

const app = new koa()

app.use(async (ctx, next) => {
    console.log('middleWare 01')
    ctx.ms = 'aaa'
    await next()

    // 返回结果
    console.log('000000')
    ctx.body = ctx.ms
})

app.use(async (ctx, next) => {
    console.log('middleWare 02')
    ctx.ms += 'bbb'

    // 如果执行的下一个中间件是一个异步函数，那么 next 默认不会等到中间件执行的结果，就会执行下一步操作
    // 如果我们希望等待下一个异步函数的执行结果，那么需要在 next 函数前面加 await
    await next()
    console.log(1111111)
})

app.use(async  (ctx, next) => {
    console.log('middleWare 03')

    // 网络请求
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    console.log('22222222')
    ctx.ms += res.data.data.banner.list[0].title
})

app.listen(9000, () => {
    console.log('koa 服务器启动～')
})