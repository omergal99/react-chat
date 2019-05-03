import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Chat extends Component {
  state = {
    text: '',
    typeTime: null
  }

  updateMsg = (ev) => {
    this.setState({ text: ev.target.value, typeTime: Date.now() });

    if (Date.now() - this.state.typeTime > 250) {
      this.props.store.chatStore.sendUserTyping();
    }

    setTimeout(() => {
      if (Date.now() - this.state.typeTime > 1000 ) {
        this.props.store.chatStore.sendUserStop()
      }
    }, 1200)
  }

  sendMsg = (ev) => {
    ev.preventDefault();
    if (this.state.text) {
      this.props.store.chatStore.sendMsg(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    var currUser = this.props.store.userStore.getCurrUser;
    var userTyping = this.props.store.chatStore.getNameType;

    var massages = this.props.store.chatStore.getMsgs;
    const chat = massages.map((msg, idx) => (
      <li className={ currUser === msg.from ? 'own' : 'else' } key={idx}>
        <label className="user">{msg.from}:&nbsp;</label>
        <label>{msg.txt}</label>
      </li>
    ));
    return (
      <section className="homePage">

        <h1>{currUser}, Welcome to Chat!</h1>

        {userTyping &&
          <div className="type-area">{userTyping} typing...</div>
        }
        {!userTyping &&
          <div className="type-area"></div>
        }

        <form className="msg-form">
          <input autoFocus value={this.state.text} onChange={this.updateMsg} type="text" />
          <button onClick={this.sendMsg}>SEND</button>
        </form>

        <ul className="msg-list">{chat}</ul>


      </section>
    )
  }
}

export default observer(Chat);