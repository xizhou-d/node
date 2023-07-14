const fs = require('fs')

fs.open('./bbb.txt', (err, fd) => {
    if (err) {
        console.log('文件打开错误: ', err)
        return
    }

    // 1. 获取文件描述符
    console.log('fd', fd)

    // 2. 读取到文件的信息
    fs.fstat(fd, (err, status) => {
        if (err) {
            console.log('读取文件信息发生错误: ', err)
            return
        }

        console.log('status', status)

        // 3. 手动关闭文件
        fs.close(fd)
    })
})