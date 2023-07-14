const fs = require('fs')

// 1. 同步读取
// const res1 = fs.readFileSync('./aaa.txt', {
//     encoding: 'utf-8'
// })
// console.log('res1', res1)

// console.log('后续代码')

// 2. 异步读取： 回调函数
// fs.readFile('./aaa.txt', {
//     encoding: 'utf-8'
// }, (error, data) => {
//     if (error) {
//         console.log('读取文件出错:', error)
//         return
//     }

//     console.log('读取文件结果: ', data)
// })

// console.log('后续代码')

// 3. 异步读取： Promise

fs.promises.readFile('./aaa.txt', {
    encoding: 'utf-8'
}).then(data => {
    console.log('读取文件结果: ', data)
}).catch(error => {
    console.log('读取文件发生错误: ', error)
})