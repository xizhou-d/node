const mysql1 = require('mysql2')

// 1. 创建一个数据库连接（连接数据库）
const connection = mysql1.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: 'Yk114016**'
})

// 2. 执行操作语句，操作数据库
const statement = 'SELECT * FROM `students`;'
connection.query(statement, (err, data, fields) => {
    if (err) {
        console.log('查询失败')
        return
    }

    // 查看结果
    console.log('data', data)
    console.log('fields', fields)
})