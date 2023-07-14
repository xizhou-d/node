const koa = require('koa')
// const koaRouter = require('@koa/router')
const userRouter = require('./router/userRouter.js')

const app = new koa()

// 路由的使用
// 1. 创建路由对象
// const userRouter = new koaRouter({ prefix: '/users' })

// 2. 在路由中注册中间件：path/method
// userRouter.get('/', (ctx, next) => {
//     ctx.body = '获取用户数据成功'
// })
// userRouter.get('/:id', (ctx, next) => {
//     ctx.body = `获取 ${ctx.params.id} 数据成功`
// })
// userRouter.post('/', (ctx, next) => {
//     ctx.body = '创建用户成功'
// })
// userRouter.delete('/:id', (ctx, next) => {
//     ctx.body = `删除${ctx.params.id} 用户成功`
// })
// userRouter.patch('/:id', (ctx, next) => {
//     ctx.body = `修改 ${ctx.params.id} 用户成功`
// })

// 3. 让路由中间件生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 启动服务器
app.listen(6000, () => {
    console.log('koa 服务器启动')
})