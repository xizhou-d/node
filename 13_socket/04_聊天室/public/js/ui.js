const page = (function () {
    const userList = $(".users");
    const chatList = $(".chat-list");

    function intoChatRoom() {
        $(".form").hide();
        $(".chat").show();
    }

    function addUser(username) {
        $("<li>").text(username).attr("user", username).appendTo(userList);
        const number = +$(".user-list .title span").text();
        $(".user-list .title span").text(number + 1);
        addLog(`<span class='user'>${username}</span> 进入聊天室`);
        chatList.scrollTop(chatList.prop("scrollHeight"), 0);
    }

    function addLog(log) {
        $("<li>").addClass("log").html(log).appendTo(chatList);
    }

    function removeUser(username) {
        console.log("username111111111", username);
        const li = userList.find(`li[user="${username}"]`);
        if (!li.length) return;
        li.remove();
        const number = +$(".user-list .title span").text();
        $(".user-list .title span").text(number - 1);
        addLog(`<span class='user'>${username}</span> 离开了聊天室`);
    }

    function initChatRoom() {
        userList.html(`<li class="all">所有人</li>`);
        $(".user-list .title span").text(0);
        chatList.html(`<li class="log">欢迎来到渡一聊天室</li>`);
    }

    function getTargetUser() {
        const result = $(".sendMsg .user").text();
        return result === "所有人" ? null : result;
    }

    function addMsg(from, msg, to) {
        const li = $("<li>")
            .html(`<span class="user">${from}</span> <span class="gray">对</span> 
        <span class="user">${
          to ? to : "所有人"
        }</span> <span class="gray">说：</span> `);
        const msgSpan = $("<span>").text(msg);
        li.append(msgSpan).appendTo(chatList);
        chatList.scrollTop(chatList.prop("scrollHeight"), 0);
    }

    function clearInput() {
        $('.chat input').val('')
    }

    userList.click((e) => {
        if (e.target.tagName === "LI") {
            $(".sendMsg .user").text(e.target.innerHTML);
        }
    });

    return {
        me: null,
        intoChatRoom,
        initChatRoom,
        addUser,
        removeUser,
        getTargetUser,
        addMsg,
        clearInput
    };
})();

(function () {
    $(".login input").keydown((e) => {
        if (e.key === "Enter") {
            page.me = e.target.value;
            page.Login && page.Login(page.me);
        }
    });

    $(".chat input").keydown((e) => {
        if (e.key === "Enter") {
            console.log("e", e.target.value);
            page.onSendMsg **
                page.onSendMsg(page.me, e.target.value, page.getTargetUser());
        }
    });
})();