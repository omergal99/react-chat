import ChatStore from './ChatStore';

class AppModule {
    constructor() {
        this.chatStore = new ChatStore(this)
    }
}

const AppStore = new AppModule()
export default AppStore;
