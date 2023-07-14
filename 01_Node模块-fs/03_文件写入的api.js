const fs = require('fs')

// 1. 有一段内容（客户端传递过来的 http/express/koa) 
const content = 'There is a will, there is a will.'

// 2. 文件的写入操作
fs.writeFile('./ccc.txt', content, {
    encoding: 'utf-8',
    flag: 'a'
}, (err) => {
    if (err) {
        console.log('写入失败: ', err)
    } else {
        console.log('写入内容成功')
    }
})