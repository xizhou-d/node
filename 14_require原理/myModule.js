console.log('当前模块路径: ', __dirname)
console.log('当前模块文件: ', __filename)

this.m = 5
console.log('this', this)
exports.c = 3
module.exports = {
    a: 1,
    b: 2,
}