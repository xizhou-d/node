import express from 'express'
import cors from 'cors'

import router from '../router/index.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('./static'))
app.use('/download', router)


app.listen(3000, () => {
    console.log('服务器已经启动。')
})