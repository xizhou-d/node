const os = require('os')

// 获取操作系统换行符
console.log('os.EOL', os.EOL)
// 获取 CPU 架构名
console.log('os.arch', os.arch())
// 获取 cpu 信息
console.log('os.cpus', os.cpus())
// 还剩下多少内存可以用
console.log('os.freemem', os.freemem() / 2**30)