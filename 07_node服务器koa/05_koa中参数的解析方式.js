const koa = require('koa')
const koaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

const app = new koa()
const userRouter = new koaRouter({ prefix: '/users' })
const formParser = multer()

/**
 * 1. get: params方式， 例子: /:id
 * 2. get: query方式，例子: ?name=xizhou&age=18
 * 3. post: json方式，例子: { "name": "xizhou", "age": 18}
 * 4. post: x-www-form-urlencoded方式
 * 5. post: form-data方式
 */

app.use(bodyParser())

// 1. params
userRouter.get('/:id', (ctx, next) => {
    console.log('ctx.params.id', ctx.params.id)
    ctx.body = '获取用户列表数据成功'
})

// 2. query
userRouter.get('/', (ctx, next) => {
    const query = ctx.query
    console.log('query', query)
    ctx.body = '用户的 query 信息' + JSON.stringify(query)
})

// 3. json
userRouter.post('/json', (ctx, next) => {
    console.log(ctx.body, ctx.request.body)
    ctx.body = '创建用户成功'
})

// 4. urlencoded
userRouter.post('/urlencoded', (ctx, next) => {
    console.log('ctx.request.body', ctx.request.body)
    ctx.body = '用户的 urlencoded 信息'
})

// 5. formdata
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
    console.log('--------', ctx.request.body, ctx.res.body)
    ctx.body = '用户的 formdata 信息'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
    console.log('koa 服务器启动成功～');
})