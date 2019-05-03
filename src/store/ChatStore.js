import { decorate, observable, computed, action } from 'mobx';

import SocketService from '../services/SocketService';

class ChatModule {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.msgs = [{ txt: 'hello', from: 'Omer' }, { txt: 'hii', from: 'Amit' }];
        this.userTyping = '';
    }

    sendMsg(txt) {
        SocketService.send(txt)
    }
    sendUserTyping() {
        SocketService.typing()
    }
    sendUserStop() {
        SocketService.stopTyping()
    }


    addMsg(txt, from) {
        this.msgs.push({ txt, from })
    }
    setUserTyping(user) {
        this.userTyping = user;
    }

    get getMsgs() {
        return [...this.msgs];
    }
    get getNameType() {
        return this.userTyping;
    }

}

decorate(ChatModule,
    {
        msgs: observable,
        userTyping: observable,

        sendMsg: action,
        sendUserTyping: action,
        sendUserStop: action,

        addMsg: action,
        setUserTyping: action,

        getMsgs: computed,
        getNameType: computed
    })

export default ChatModule;