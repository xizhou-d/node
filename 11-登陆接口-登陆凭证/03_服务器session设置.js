const Koa = require('koa')
const KoaRouter = require('@koa/router')
const koaSession = require('koa-session')

const usersRouter = new KoaRouter({ prefix: '/users' })

const app = new Koa()

const session = koaSession({
    key: 'sessionid',
    signed: true,
    maxAge: 5 * 1000 * 60, // 5 minutes
    // httpOnly: true // 只能通过 http 设置 sessionid, 不能通过 js 设置 cookie
}, app)
// 加盐操作
app.keys = ['aaa', 'bbb', 'ccc']
app.use(session)

usersRouter.get('/login', (ctx, next) => {
    // 在服务器中为登陆的客户端设置一个 cookie
    ctx.session.slogan = 'ikun'
    ctx.body = '登陆成功'
})

usersRouter.get('/list', (ctx, next) => {
    // 验证用户的登录凭证：携带口号（ikun）
    const value = ctx.session.slogan
    console.log('value', value)
    if (value === 'ikun') {
        ctx.body = 'user list data~'
    } else {
        ctx.body = '没有权限访问列表，请先登陆。'
    }
})

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 服务器启动了')
})