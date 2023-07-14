const fs = require('fs')

// 1. 从文件中读取 Buffer
// fs.readFile('./aaa.txt', { encoding: 'utf8'}, (err, data) => {
//     console.log('data00000', data)
// })

// fs.readFile('./aaa.txt', (err, data) => {
//     console.log('data1111111', data.toString())
// })

// fs.readFile('./aaa.txt', (err, data) => {
//     data[0] = 0X6E
//     console.log('modified', data.toString())
// })


// 2. 读取一张图片的二进制
fs.readFile('./荒天帝.jpeg', (err, data) => {
    console.log('data222222', data)
})