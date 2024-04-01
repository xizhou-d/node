const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './files/a.txt')

// fs.readFile(filename, 'utf-8', (err, content) => {
//     console.log(content)
// })

const content = fs.readFileSync(filename, 'utf-8')
console.log('content',)
console.log(11111111)