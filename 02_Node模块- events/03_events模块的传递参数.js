const EventEmitter = require('events')

// 创建 EventEvent 实例
const emitter = new EventEmitter()

// 监听事件
function handleData(...args) {
    console.log('监听 data 事件', args)
}
emitter.on('data', handleData)

// 发射事件
setTimeout(() => {
    emitter.emit('data', 'xizhou', '200', 19)

    // 取消事件
    emitter.off('data', handleData)

    setTimeout(() => {
        emitter.emit('data')
    }, 1000)
}, 2000)