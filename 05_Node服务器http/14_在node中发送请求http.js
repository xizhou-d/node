const http = require('http')

// 1. 使用 http 模块发送 get 请求
// http.get('http://localhost:8000', res => {
//     res.on('data', res => {
//         const dataString = res.toString()
//         const dataInfo = JSON.parse(dataString)

//         console.log('dataInfo', dataInfo)
//     })
// })

// 2. 使用 http 发送 post 请求
const req = http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8000
}, res => {
    res.on('data', resData => {
        console.log('resData', resData.toString())
    })
})

req.end()