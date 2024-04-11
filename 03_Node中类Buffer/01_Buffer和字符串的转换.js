// 1. 创建 Buffer
// const buf1 = new Buffer('Hello')

// const buf2 = new Buffer.from('world')
// console.log(buf) // 一个字母一个字节 

// const buf3 = new Buffer.from('大秦帝国') // 一个中文汉字是三个字节
// console.log('buf3', buf3)

// console.log(buf3.toString())

// 4. 手动指定buffer编码
const buf4 = new Buffer.from('哈哈哈', 'utf16le')
// 编码操作
console.log('buf4',buf4)
// 解码操作
console.log(buf4.toString('utf16le'))
console.log(buf4.toString('utf8'))