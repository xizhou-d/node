const koa = require('koa')
const koaRouter = require('@koa/router')
const fs = require('fs')

const app = new koa()

const userRouter = new koaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    // 1. body 的类型是 string
    // ctx.body = '获取用户列表数据成功'

    // 2. body 的类型是 Buffer
    // ctx.body = Buffer.from('你好啊，李银河')

    // 3. body 的类型是 stream
    // const readStream = fs.createReadStream('./uploads/1687188092039_荒天帝.jpeg')
    // ctx.type = 'image/jpeg'
    // ctx.body = readStream

    // 4. body 的类型是 array/object 使用最多
    ctx.body = {
        code: 0,
        data: [
            { id: 111, name: 'iphone', price: 12000 },
            { id: 222, name: 'xiaomi', price: 8000 },
            { id: 333, name: 'huawei', price: 5000 }
        ]
    }

    // 5. body 的值是 null
    ctx.body = null
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
    console.log('koa 服务器启动成功～');
})