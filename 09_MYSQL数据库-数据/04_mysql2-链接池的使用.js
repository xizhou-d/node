const mysql2 = require('mysql2')

// 1. 创建一个连接
const connectionPool = mysql2.createPool({
    host: 'localhost', 
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: 'Yk114016**',
    connectionLimit: 5
})

// 2. 执行一个 SQL 语句： 预处理语句
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'

connectionPool.execute(statement, [1000, 8], (err, data, fields) => {
    if (err) {
        console.log('查询失败', err)
        return
    }

    console.log('data', data)
    console.log('fields', fields)
})