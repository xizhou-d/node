/**
 * 引入第三方库
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

/**
 * 本地引入
 */
const userRouter = require('../router/user.router.js')

/**
 * app
 */
const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app