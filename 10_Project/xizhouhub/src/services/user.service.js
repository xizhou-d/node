const connection = require('../app/database')
// 操作数据库 
class UserService {
    async create(user) {
        // 1. 获取用户 user
        const {username, password} = user
        console.log('user', user)
        // 2. 拼接 statement
        const statement = 'INSERT INTO `users` (username, `password`) VALUES (?, ?);'
        // 3. 执行 statement
        const [result] = await connection.execute(statement, [username, password])
        return result
    }

    async findUserByName(name) {
        const statement = 'SELECT * FROM `users` WHERE username = ?;'

        const [values] = await connection.execute(statement, [name])
        return values
    }
}

module.exports = new UserService()