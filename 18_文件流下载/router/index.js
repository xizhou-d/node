import express from 'express'
import path from 'node:path'
import fs from 'node:fs'

const router = express.Router()

router.post('/stream', (req, res, next) => {
    console.log('req.body', req.body)
    const filename = req.body.filename
    const absPath = path.join(process.cwd(), '/static', filename)
    const content = fs.readFileSync(absPath)

    // 两个响应头：
    // Content-Type: application/json application/pdf application/octet-stream(二进制流)
    // Content-Disposition: 我们在网页里面打开图片，直接去预览，而不是下载。默认 inline，内联模式
    //                      attachment 文件当作一个附件去下载

    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Disposition', 'attachment;filename=' + filename)
    res.send(content)
})

export default router