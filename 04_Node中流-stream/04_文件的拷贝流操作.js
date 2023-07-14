const fs = require('fs')

// 1. 一次性读取和写入文件
// fs.readFile('./foo.txt', (err, data) => {
//     if (err) return

//     fs.writeFile('./foo_copy.txt', data, {
//         flags: 'a+'
//     }, (err) => {
//         console.log('err', err)
//     })
// })

// 2. 创建可读流和可写流
// const readStream = fs.createReadStream('./foo.txt') 
// const writeStream = fs.createWriteStream('./foo_copy02.txt', {
//     flags: 'a+'
// })

// readStream.on('data', (data) => {
//     writeStream.write(data)
// })

// readStream.on('end', () => {
//     console.log('读取数据结束')
//     writeStream.close()
// })

// 3. 在可读流和可写流指甲建立一个管道
const readStream = fs.createReadStream('./foo.txt') 
const writeStream = fs.createWriteStream('./foo_copy03.txt', {
    flags: 'a+'
})
readStream.pipe(writeStream)