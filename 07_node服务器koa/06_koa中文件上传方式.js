const koa = require('koa')
const koaRouter = require('@koa/router')
const multer = require('@koa/multer')

const app = new koa()

// const upload = multer({
//     dest: './uploads'
// })

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, './uploads')
        },
        filename(req, file, callback) {
            callback(null, Date.now() + '_' + file.originalname)
        }
    })
})

const userRouter = new koaRouter({ prefix: '/upload' })

userRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
    console.log('ctx.request.file', ctx.request.file)
    ctx.body = '文件上传成功'
})

userRouter.post('/photos', upload.array('photos'), (ctx, next) => {
    console.log('ctx.request.files', ctx.request.files)
    ctx.body = '多个文件上传成功'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
    console.log('koa 服务器启动成功～');
})