const fs = require('fs')

// 1. 通过流读取文件
// 1.1 创建一个可读流
const readStream = fs.createReadStream('./aaa.txt', {
    // 从什么位置开始读取
    start: 2,
    // 读取到什么位置后结束（包含结束位置 ）
    end: 16,
    highWaterMark: 3
})

// 2. 监听读取到的数据
readStream.on('data', (data) => {
    console.log('data111111', data.toString())
})

// 3. 补充其他的事件监听
readStream.on('open', (fd) => {
    console.log('通过流将文件打开', fd)
})

readStream.on('end', () => {
    console.log('数据读取结束')
})

readStream.on('close', () => {
    console.log('文件读取结束，并被关闭掉')
})