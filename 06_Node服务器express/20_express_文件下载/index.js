const express = require('express')
const router = require('./router')

const app = new express()
app.use(express.static('./public'))
app.use('/download', router)

app.listen(8000, () => {
    console.log('服务器启动成功')
})