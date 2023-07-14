const fs = require('fs')
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const jwt = require('jsonwebtoken')

const usersRouter = new KoaRouter({ prefix: '/users' })

const app = new Koa()

const privateKey = fs.readFileSync('./keys/private.key')
const publicKey = fs.readFileSync('./keys/public.key')

usersRouter.get('/login', (ctx, next) => {
    // 1. 颁发 token
    const payload = { id: 111, name: 'xizhou'}
    const token = jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: 60
    })
    ctx.body = {
        code: 0,
        token,
        message: '登陆成功',
    }
})

usersRouter.get('/list', (ctx, next) => {
    // 1. 获取客户端携带过来的 token
    const authorization = ctx.headers.authorization
    const token = authorization.replace('Bearer ', '')
    console.log('token', token)
    // 2. 验证 token
    try {
        const result = jwt.verify(token, publicKey, {
            algorithms: ['RS256']
        })
        console.log('result', result)
        ctx.body = {
            code: 0,
            data: [
                { id: 111, name: 'monv' },
                { id: 222, name: 'yuechan' },
                { id: 333, name: 'qingyi' }
            ]
        }
    } catch (error) {
        ctx.body = {
            code: -1010,
            message: '无效的token,或者登陆已过期，请重新登陆'
        }
    }
})

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 服务器启动了')
})