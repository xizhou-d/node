import express from 'express'
import multer from 'multer'
import fs from 'node:fs'
import path from 'node:path'

import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            // 文件切片存放的目录
            callback(null, './upload')
        },
        filename: (req, file, callback) => {
            callback(null, `${req.body.index}-${req.body.filename}`)
        }
    })
})

const router = express.Router()

router.post('/bigFile', upload.single('photo'), (req, res, next) => {
    res.send('hello')
})

router.post('/merge', (req, res, next) => {
    let files = fs.readdirSync(path.resolve(__dirname, '../../upload'))
    // 排序
    files = files.sort((file1, file2) => {
        return file1.split('-')[0] - file2.split('-')[0]
    })
    console.log('files', files)
    console.log('req.body', req.body)
    const videoPath = path.join(process.cwd(), '/video', `${req.body.filename}.jpg`)

    files.forEach(file => {
        fs.appendFileSync(videoPath, fs.readFileSync(path.resolve(__dirname, '../../upload', file)))
        fs.unlinkSync(path.resolve(__dirname, '../../upload', file))
    })
    res.send('合并完成')
})

export default router