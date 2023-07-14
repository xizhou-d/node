const Koa = require('koa')
const KoaRouter = require('@koa/router')

const usersRouter = new KoaRouter({ prefix: '/users' })

usersRouter.get('/login', (ctx, next) => {
    // 在服务器中为登陆的客户端设置一个 cookie

    ctx.cookies.set('slogan', 'ikun', {
        maxAge: 60 * 1000
    })
    ctx.body = '登陆成功'
})

usersRouter.get('/list', (ctx, next) => {
    // 验证用户的登录凭证：携带口号（ikun）
    const value = ctx.cookies.get('slogan')
    console.log('value', value)
    if (value === 'ikun') {
        ctx.body = 'user list data~'
    } else {
        ctx.body = '没有权限访问列表，请先登陆。'
    }
})

const app = new Koa()

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 服务器启动了')
})