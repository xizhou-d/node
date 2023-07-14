const fs = require('fs')

// 读取文件夹

// 1. 读取文件夹，获取到文件夹中的字符串形式
// fs.readdir('./xizhou', (err, files) => {
//     if (err) {
//         console.log('读取文件夹失败：', err)
//     }
//     console.log('files', files)
// })

// 2. 读取文件夹，获取文件夹中的文件信息
// fs.readdir('./xizhou', { withFileTypes: true }, (err, files) => {
//     console.log('files', files)
    
//     files.forEach(item => {
//         if (item.isDirectory()) {
//             console.log('item.name is a directory')
//             fs.readdir(`./why/${item.name}`, { withFileTypes: tryr }, (err, files) => {
//                 console.log('files', files)
//             })
//         } else {
//             console.log('item.name is a file name')
//         }
//     })
// })

// 3. 递归读取文件夹中的所有文件
function readDir(path) {
    fs.readdir(path, { withFileTypes: true }, (error, files) => {
        files.forEach(item => {
            if (item.isDirectory()) {
                readDir(`${path}/${item.name}`)
            } else {
                console.log(`${item.name} 是一个文件`)
            }
        })
    })
}

readDir('./xizhou')