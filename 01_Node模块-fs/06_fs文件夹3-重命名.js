const fs = require('fs')

// 1. 对文件夹进行重命名
// fs.rename('./xizhou', './dongzhou', (err) => {
//     console.log('err', err)
// })

// 2. 对文件进行重命名
fs.rename('./dongzhou/uuu.txt', './dongzhou/iii.txt', (err) => {
    console.log('err', err)
})