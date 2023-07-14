const koa = require('koa')

const app = new koa()

// 注册中间件（middleWare）
// koa 的中间件有两个参数：ctx/next
app.use((ctx, next) => {
    console.log('匹配到 koa 中间件～')
    // ctx.res.end('hahahah')
    ctx.body = '哈哈哈哈哈'
})

app.listen(6000, () => {
    console.log('koa 服务器启动成功～')
})