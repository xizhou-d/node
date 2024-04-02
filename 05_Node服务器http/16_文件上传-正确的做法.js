const http = require('http')
const fs = require('fs')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    req.setEncoding('binary')

    console.log('req.headers', req.headers['content-type'])
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
    console.log('boundary', boundary)

    let formData = ''
    req.on('data', data => {
        // console.log('data', data)
        formData += data
    })
    req.on('end', () => {
        console.log('formData', formData)

        // 1. 截取从 image/jpeg 位置开始后面所有的数据
        let imageType = 'image/jpeg'
        let imageTypePosition = formData.indexOf(imageType) + imageType.length
        let imageData = formData.substring(imageTypePosition)
        // 2. imageData 开始位置会有两个空格
        imageData = imageData.replace(/^\s\s*/, '')
        // 3. 替换最后的 boundary
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        // 4. 将 imageData 存储到文件中
        console.log('imageData', imageData)
        fs.writeFile('./upload/shihao.jpeg', imageData, 'binary', () => {
            console.log('文件存储成功')
            console.log('文件上传成功')
        })

        res.write('kkkkkkkkk')
        res.write('iiiiiiii')
        
        res.end('文件上传成功')
    })
})

// 2. 开启 server 服务器
server.listen(8000, () => {
    console.log('8000 端口服务器已启动～')
})