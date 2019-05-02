import { decorate, observable, computed, action } from 'mobx';

import SocketService from '../services/SocketService';

class ChatModule {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.msgs = [{txt:'hello',from: 'Omer'},{txt:'hii',from: 'Amit'}];
    }

    sendMsg(txt) {
        SocketService.send(txt)
    }

    addMsg(txt,from) {
        this.msgs.push( { txt , from } )
    }

    get getMsgs() {
        return [...this.msgs];
    }

}

decorate(ChatModule,
    {
        msgs: observable,

        sendMsg: action,
        addMsg: action,

        getMsgs: computed
    })

export default ChatModule;