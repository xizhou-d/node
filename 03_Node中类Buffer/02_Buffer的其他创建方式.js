const fs = require('fs')

// 1. 创建一个 buffer 对象
// 8个字节大小的 buffer 内存空间 
const buf = Buffer.alloc(8)
console.log('buf', buf)

// 2. 手动对每个字节进行访问
console.log('buf[0]', buf[0])

// 3. 手动对每个字节进行操作 
buf[0] = 100
buf[1] = 0X66
buf[2] = 'h'.charCodeAt()
console.log(buf, buf.toString())