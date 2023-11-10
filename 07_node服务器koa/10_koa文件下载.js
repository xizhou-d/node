const Koa = require('koa')
const KoaRouter = require('@koa/router')
const path = require('path')
const fs = require('fs')
const send = require('koa-send');

const userRouter = new KoaRouter({ prefix: '/download' })

const app = new Koa()

userRouter.get('/:name', async(ctx, next) => {
    const name = ctx.params.name;
    console.log('name', name)
	const path = `uploads/${name}`;
    console.log('path', path)
	ctx.attachment(path);
    await send(ctx, path);
})

// 3. 让路由中间件生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8081, () => {
    console.log('koa 服务器启动成功～');
}) 



// 会报错，还需要改进