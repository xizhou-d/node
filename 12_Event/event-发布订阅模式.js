function EventEmitter() {
    this._events = {}
}

EventEmitter.prototype.on = function(eventName, cb) {
    if (!this._events) this._events = {}

    let eventLists = this._events[eventName] || (this._events[eventName] = [])

    eventLists.push(cb)
}

EventEmitter.prototype.emit = function(eventName, ...args) {
    this._events[name] && this._events[name].forEach(cb => cb(...args))
}

EventEmitter.prototype.off = function(eventName, cb) {
    if (this._events[eventName]) {
        this._events[eventName] = this._events[eventName].filter(item => (item !== cb) && (item.cb !== cb))
    }
}

EventEmitter.prototype.once = function(eventName, cb) {
    const once = (...rest) => {
        cb(...rest)
        this.off(eventName, cb)
    }

    once.cb = cb
    this.emit(eventName, once)
}