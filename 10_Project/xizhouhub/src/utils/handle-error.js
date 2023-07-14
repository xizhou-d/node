const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, USERNAME_ALREADY_EXISTS } = require('../config/error-constants')

app.on('error', (err, ctx) => {
    let errCode = 0
    let message = ''

    switch(err) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            errCode = -1001
            message = '用户名和密码不能为空！'
            break
        case USERNAME_ALREADY_EXISTS:
            errCode = -1002,
            message = '当前用户已经存在！'
    }

    ctx.body = { errCode, message }
})