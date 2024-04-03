import express from 'express'
import cors from 'cors'

import router from './router/index.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./src/static'))
app.use('/upload', router)

app.listen(3000, () => {
    console.log('服务器已经启动了。')
})