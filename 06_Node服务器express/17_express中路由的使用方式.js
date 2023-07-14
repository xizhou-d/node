const express = require('express')
const userRouter  = require('./router/userRouter.js')

// 创建 app 对象
const app = express()

// 编写中间件
app.post('/logon', (req, res, next) => {
    
})

app.get('/home', (req, res, next) => {

})

/** 用户的接口 */
// 1. 将用户的接口直接定义在 app 中
// app.get('/users', (req, res, next) => {})
// app.get('/users/:id', (req, res, next) => {})
// app.post('/users', (req, res, next) => {})
// app.delete('/users', (req, res, next) => {})
// app.patch('/users', (req, res, next) => {})

// 2. 将用户的接口定义在单独的路由对象中
// const userRouter = express.Router()
// userRouter.get('/', (req, res, next) => {
//     res.json('用户列表数据')
// })
// userRouter.get('/:id', (req, res, next) => {
//     const id = req.params.id
//     res.json('某一个用户的数据' + id)
// })
// userRouter.post('/', (req, res, next) => {
//     res.json('创建用户成功')
// })
// userRouter.delete('/:id', (req, res, next) => {
//     const id = req.params.id
//     res.json('删除用户成功：' + id)
// })
// userRouter.patch('/:id', (req, res, next) => {
//     const id = req.params.id
//     res.json('修改某一个用户成功: ' + id)
// })

// 3. 让路由生效
app.use('/users', userRouter)

// 启动服务器
app.listen(9000, () => {
    console.log('服务器启动成功～')
})