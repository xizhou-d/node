const userService = require('../services/user.service')

class UserController {
    async create(ctx, next) {
        
        const result = await userService.create(ctx.request.body)
        // 3.查看存储的结果，告知前端创建成功
        ctx.body = {
            message: '创建用户成功',
            data: result
        }
    }
}

module.exports = new UserController()