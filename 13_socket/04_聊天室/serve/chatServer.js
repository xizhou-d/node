const socketIO = require("socket.io");

let users = [];

module.exports = function (server) {
    const io = socketIO(server);

    io.on("connection", (socket) => {
        let curUser = '' // 当前用户名
        socket.on("login", (data) => {
            if (data === "所有人" || users.filter((u) => u.username === data).length > 0) {
                socket.emit("login", false);
            } else {
                users.push({
                    username: data,
                    socket
                })
                curUser = data
                socket.emit('login', true)
                // 新用户进入了，需要用到广播，广播给出了自己之外的其他所有的用户
                socket.broadcast.emit('userin', data)
            }
        });

        socket.on('users', () => {
            const arr = users.map(u => u.username)
            socket.emit('users', arr)
        });

        socket.on('msg', (data) => {
            console.log('data', data)
            if (data.to) {
                const us = users.filter(u => u.username === data.to)
                const u = us[0]

                u.socket.emit('new msg', {
                    from: curUser,
                    to: data.to,
                    content: data.content
                })
            } else {
                // to 如果是所有人被设置为了 null，因此，这里代表给所有人推送消息
                socket.broadcast.emit('new msg', {
                    from: curUser,
                    to: data.to,
                    content: data.content
                })
            }
        })

        socket.on('disconnect', () => {
            socket.broadcast.emit('userout', curUser)
            users = users.filter(u => u.username !== curUser)
        });
    });
};