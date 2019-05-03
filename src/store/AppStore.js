import ChatStore from './ChatStore';
import UserStore from './UserStore';

class AppModule {
    constructor() {
        this.chatStore = new ChatStore(this)
        this.userStore = new UserStore(this)
    }
}

const AppStore = new AppModule()
export default AppStore;
