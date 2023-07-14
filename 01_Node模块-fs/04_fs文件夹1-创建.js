const fs = require('fs')

fs.mkdir('./xizhou', (err) => {
    console.log('创建失败：', err)
})