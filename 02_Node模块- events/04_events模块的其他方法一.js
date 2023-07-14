const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('xizhou', () => {})
emitter.on('xizhou', () => {})
emitter.on('xizhou', () => {})

emitter.on('dongzhou', () => {})
emitter.on('dongzhou', () => {})

// 1. 获取所有监听事件的名称
console.log(emitter.eventNames())

// 2. 获取监听器最大的监听个数
console.log(emitter.getMaxListeners())

// 3. 获取某一个事件名称对应的监听起个数
console.log(emitter.listenerCount('xizhou'))
console.log(emitter.listenerCount('dongzhou'))

// 4. 获取某一个事件名称对应的监听器函数（数组）
console.log(emitter.listeners('xizhou'))