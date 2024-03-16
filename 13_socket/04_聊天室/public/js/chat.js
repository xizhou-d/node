const socket = io.connect()

page.Login = function(username) {
    socket.emit('login', username)
}

page.onSendMsg = function(me, msg, to) {
    socket.emit('msg', {
        to,
        content: msg
    })
    page.addMsg(me, msg, to)
    page.clearInput()
}

socket.on('login', (result) => {
    if (result) {
        page.intoChatRoom()
        socket.emit('users', '')
    } else {
        alert('昵称不可用！')
    }
})

socket.on('users', (users) => {
    page.initChatRoom()

    for (const u of users) {
        page.addUser(u)
    }
})

socket.on('userin', (username) => {
    page.addUser(username)
})

socket.on('userout', (username) => {
    console.log('userout-username', username)
    page.removeUser(username)
})

socket.on('new msg', (result) => {
    console.log('client new msg result', result)
    page.addMsg(result.from, result.content, result.to)
})