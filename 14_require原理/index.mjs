function require(modulePath) {
    // 1. 将 modulePath 转化为绝对路径：/Users/xizhou/workSpace/my_github/node/14_require原理/myModule.js

    // 2. 判断是否该模块已有缓存
    if (require.cache['/Users/xizhou/workSpace/my_github/node/14_require原理/myModule.js']) {
        return require.cache['/Users/xizhou/workSpace/my_github/node/14_require原理/myModule.js']
    }

    // 3. 读取文件内容
    // 4. 包裹到一个函数中
    function _temp(module, exports, require, __dirname, __filename) {
        console.log('当前模块路径: ', __dirname)
        console.log('当前模块文件: ', __filename)

        this.m = 5
        console.log('this', this)
        exports.c = 3
        module.exports = {
            a: 1,
            b: 2,
        }
    }

    // 5. 创建 module 对象
    module.exports = {}
    const exports = module.exports

    _temp.call(module.exports, module, exports, require, module.path, module.filename)

    return module.exports
}

require.cache = {}

const result = require('./myModule')

console.log('result', result)