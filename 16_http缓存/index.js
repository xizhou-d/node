import express from 'express'
import cors from 'cors'

import router from './router/index.js'

const app = express()
app.use(cors())
app.use('', router)

// 静态资源的缓存，css js png html
app.use(express.static('./static', {
    maxAge: 5 * 60 * 1000,
    lastModified: true
}))

app.listen(8000, () => {
    console.log('服务器已经启动了。')
})