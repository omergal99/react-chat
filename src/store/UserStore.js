import { decorate, observable, computed, action } from 'mobx';

import UserService from '../services/UserService';

class UserModule {
  currUser = null;

  loadUser() {
    return UserService.getUser()
      .then((user) => user ? this.setUser(user) : '')
  }

  setUser(user) {
    this.currUser = user;
  }

  get getCurrUser() {
    return JSON.parse(JSON.stringify(this.currUser));
  }

}

decorate(UserModule,
  {
    currUser: observable,

    loadUser: action,
    setUser: action,

    getCurrUser: computed,
  })

export default UserModule;