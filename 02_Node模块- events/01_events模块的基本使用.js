const EventEmitter = require('events')

// 创建 EventEvent 实例
const emitter = new EventEmitter()

// 监听事件
emitter.on('data', () => {
    console.log('监听 data 事件')
})

// 发射事件
setTimeout(() => {
    emitter.emit('data')
}, 2000)