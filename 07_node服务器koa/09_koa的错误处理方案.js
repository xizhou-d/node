const koa = require('koa')
const koaRouter = require('@koa/router')

const app = new koa()

const userRouter = new koaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    const isAuth = false
    if (isAuth) {
        ctx.body = '获取用户列表数据成功'
    } else {
        // ctx.body = {
        //     code: -1003,
        //     message: '未授权的 token，请检测你的token'
        // }
        ctx.app.emit('error', -1003, ctx)
    }
})

app.on('error', (code, ctx) => {
    const errorCode = code
    let message = ''

    switch(code) {
        case -1001:
            message = '账号或者密码错误～'
            break
        case -1002:
            message = '请求参数不正确～'
            break
        case -1003:
            message = '未授权，检查你的 token 信息'
            break
    }

    const body = {
        code: errorCode,
        message: message
    }

    ctx.body = body
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 服务器启动成功～');
})