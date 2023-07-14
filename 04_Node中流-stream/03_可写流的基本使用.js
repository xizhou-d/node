const fs = require('fs')

// fs.writeFile('./bbb.txt', 'Hello world', {
//     encoding: 'utf-8',
//     flags: 'a+'
// }, (err) => {
//     console.log('写入文件出错', err)
// })

// 2. 创建一个写入流
const wirteStream = fs.createWriteStream('./ccc.txt', {
    flags: 'a+',
    //start: 5
})

wirteStream.on('open', () => {
    console.log('文件被打开')
})

wirteStream.write('iiiiiili')
wirteStream.write('oooooo')
wirteStream.write('eeeeeee', err => {
    console.log('写入完成', err)
})

// 3. 写入完成时需要手动调用 close 方法
// wirteStream.close()

// 4. end 方法
// 操作一：将最后的内容写入到文件中，并且关闭文件
// 操作二：关闭文件
wirteStream.end('哈哈哈哈哈')

wirteStream.on('close', () => {
    console.log('文件被关闭')
})