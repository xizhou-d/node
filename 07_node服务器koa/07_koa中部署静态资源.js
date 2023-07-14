const koa = require('koa')
const koaRouter = require('@koa/router')
const static = require('koa-static')

const app = new koa()

app.use(static('./uploads'))
const userRouter = new koaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    ctx.body = '获取用户列表数据成功'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 服务器启动成功～');
}) 