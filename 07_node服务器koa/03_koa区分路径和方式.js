const koa = require('koa')

const app = new koa()

app.use((ctx, next) => {
    if (ctx.path === '/users') {
        if (ctx.method === 'GET') {
            ctx.body = '获取users 数据'
        } else if (ctx.method === 'POST') {
            ctx.body = '创建用户成功'
        }
    } else if (ctx.path === '/login') {
        ctx.body = '欢迎回来'
    } else if (ctx.path === '/home') {
        ctx.body = 'home data list~'
    }
})

app.listen(6000, () => {
    console.log('koa 服务器启动成功～')
})