const fs = require('fs')

const writeStream = fs.createWriteStream('./ddd.txt', {
    flags: 'a+',
    start: 5
})

writeStream.write('my name is xizhou') 
writeStream.close()