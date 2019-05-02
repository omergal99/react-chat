import React, { Component } from 'react';
import { observer } from 'mobx-react';

// import SocketService from '../services/SocketService';


class HomePage extends Component {
  state = {
    massage: '',
    massages: []
  }

  componentDidMount() {
    // this.setState({ massages: SocketService.getMsgs() });
    this.setState({ massages: this.props.ChatStore.getMsgs });
  }
  

  updateMsg = (ev) => {
    this.setState({ massage: ev.target.value });
    // this.setState({ massages: this.props.ChatStore.getMsgs });
  }

  sendMsg = (ev) => {
    ev.preventDefault();
    if(this.state.massage){
        var msg = this.state.massage;
        // SocketService.send(msg);
        this.props.ChatStore.sendMsg(msg);
        this.setState({ massage: '' });
    }
  }

  render() {
    var massages2 = this.props.ChatStore.getMsgs;
    const chat = massages2.map((msg, idx) => (
        <li key={idx}>
            {/* <div> */}
                <label className="user">{msg.from}:&nbsp;</label>
                <label>{msg.txt}</label>
            {/* </div> */}
        </li>
    ));
    return (
      <section className="homePage">

        <h1>Welcome to Chat</h1>

        <form className="msg-form">
          <input value={this.state.massage} onChange={this.updateMsg} type="text" />
          <button onClick={this.sendMsg}>SEND</button>
        </form>

        <ul className="msg-list">{chat}</ul>

      </section>
    )
  }
}

export default observer(HomePage);