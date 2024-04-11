const fs = require('fs')

// flags 选项设置为 a+ 表示以追加模式打开文件。

// 如果文件不存在，则会创建文件。

// 如果文件存在，则会将新数据追加到文件末尾。

// start 选项表示从文件开头偏移指定数量的字节的位置开始写入数据。

// 如果文件不存在，则无法从文件开头偏移指定数量的字节的位置开始写入数据。

// 因此，不会创建新文件。

// 要解决这个问题，请将 flags 选项设置为 w+。

// w+ 模式表示以写入模式打开文件。

// 如果文件不存在，则会创建文件。

// 如果文件存在，则会截断文件并从头开始写入数据。

const writeStream = fs.createWriteStream('./ddd.txt', {
    flags: 'a+',
    start: 5
})

writeStream.write('my name is xizhou') 
writeStream.close()