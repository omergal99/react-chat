import io from 'socket.io-client'
import AppStore from '../store/AppStore';

const serverUrl = process.env.NODE_ENV !== 'development' ?
    '' : '//localhost:9090';

var socket = io(serverUrl);

connectSocket();
function connectSocket() {
    socket.on('chat new msg', (txt, from) => {
        AppStore.chatStore.addMsg(txt, from)
    });

    socket.on('other user type', (user) => {
        if (user) {
            AppStore.chatStore.setUserTyping(user)
        } else {
            AppStore.chatStore.setUserTyping('')
        }
    });
}

const send = (txt) => {
    socket.emit('msg sent', txt, AppStore.userStore.getCurrUser);
}
const typing = () => {
    socket.emit('user type', AppStore.userStore.getCurrUser);
}
const stopTyping = () => {
    socket.emit('user type', '');
}

export default {
    send,
    typing,
    stopTyping
}
