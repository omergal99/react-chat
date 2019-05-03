// import React from 'react';
import React, { Component } from 'react';
import './assets/css/App.scss';
import AppStore from './store/AppStore';

import Chat from './pages/Chat';

class App extends Component {
  componentDidMount() {
    AppStore.userStore.loadUser()
  }

  render() {
    return (
      <div className="App">
        <Chat store={AppStore} />
      </div>
    );
  }
}

export default App;