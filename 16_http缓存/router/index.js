import express from "express";
import path from 'path'
// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

import getFileLastModifiedTime from "../utils/getFileLastModifiedTime.js";
import getHash from '../utils/getHash.js'

// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const router = express.Router()

// 动态缓存

// 强制缓存：Expiress
router.get('/api/expires', (req, res, next) => {
    // Expires 是强制缓存
    res.setHeader('Expires', new Date('2024-04-02 18:51').toUTCString())
    res.send('强制缓存：Expires')
})

// 强制缓存：cache-control
//public 任何服务器都可以缓存包括代理服务器CDN
//private 只能浏览器缓存 不包括代理服务器
//max-age 缓存的时间 秒
//Expires、Cache-Control 同时出现 优先级 max-age优先级高, 意思就是 Expires 就不生效了
router.get('/api/cacheControl', (req, res, next) => {
    // Expires 是强制缓存
    res.setHeader('Cache-Control', 'public, max-age=60')
    res.send('强制缓存：Cache-Control')
})

// 协商缓存：Last-Modified - If-Modified-Since
//强缓存跟协商缓存同时出现 浏览器优先于强缓存
//如何解决这个问题?
//no-cache 告诉浏览器我要走协商缓存别走强缓存了
//no-store 不走任何缓存
router.get('/api/lastModified', (req, res, next) => {
    const lastModifiedTime = getFileLastModifiedTime(path.resolve(__dirname, './index.js'))

    // 获取一下请求头的 If-Modified-Since 的值
    const IfModifiedSince = req.headers['if-modified-since']
    if (IfModifiedSince === lastModifiedTime) {
        console.log('缓存了')
        res.statusCode = 304 
        res.end() // 停止
        return
    }
    console.log('没有缓存')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Last-Modified', lastModifiedTime)
    res.send('协商缓存：Last-Modified')
})

// 协商缓存：Etag、If-None_Match
router.get('/api/etag', (req, res, next) => {
    const hash = getHash(path.resolve(__dirname, './index.js'))

    const ifNoneMatch = req.headers['if-none-match']

    if (hash === ifNoneMatch) {
        res.statusCode = 304
        res.end()
        return
    }
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Etag', hash)
    res.send('协商缓存：Etag')
})

export default router