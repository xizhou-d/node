const fs = require('fs')

// 1. 一次性读取
// 缺点一：没有办法精确控制从哪里读取，读取到什么位置
// 缺点二：读取到某一个位置，暂停读取，恢复读取 
// 缺点三：文件非常大的时候，不能多次读取
// fs.readFile('./aaa.txt', (err, data) => {
//     console.log('data0000', data)
// })

// 2. 通过流读取文件
// 2.1 创建一个可读流
const readStream = fs.createReadStream('./aaa.txt', {
    // 从什么位置开始读取
    start: 2,
    // 读取到什么位置后结束（包含结束位置 ）
    end: 16,
    highWaterMark: 3
})

readStream.on('data', (data) => {
    console.log('data111111', data.toString())

    readStream.pause()

    setTimeout(() => {
        readStream.resume()
    }, 2000)
})