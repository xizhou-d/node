const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('xizhou', () => {
//     console.log('once 监听一次')
// })

// 1. 事件监听只监听一次（第一次发射事件的时候监听）
emitter.once('xizhou', () => {
    console.log('once 监听')
})

// 2. prependListener 将监听的事件添加到最前面
emitter.prependListener('xizhou', () => {
    console.log('on 监听')
})


emitter.emit('xizhou')
emitter.emit('xizhou')
emitter.emit('xizhou')

// 3. 移除所有的事件监听
// 不传递参数的情况戏， 移除所有事件名称的所有事件监听
// 在传递参数的情况下， 移除传递的事件名称的事件监听
emitter.removeAllListeners() 