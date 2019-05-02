import io from 'socket.io-client'
import AppStore from '../store/AppStore';

const serverUrl = process.env.NODE_ENV !== 'development'?
'' : '//localhost:9090';

var socket = io(serverUrl);
// const msgs = [{txt:'hello',from: 'Omer'},{txt:'hii',from: 'Amit'}];
var user = _randomName();

connectSocket();
function connectSocket() {
    socket.on('chat new msg', (txt,from) => {
        // msgs.push( { txt , from } );
        AppStore.chatStore.addMsg(txt, from)
    });
}

// const getMsgs = () => {
//     return msgs;
// }

const send = (txt) => {
    socket.emit('msg sent', txt, user);
}

export default {
    send,
    // getMsgs
}

function _randomName(size = 6) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}