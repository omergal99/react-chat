import React from 'react';
import './assets/css/App.scss';
import AppStore from './store/AppStore';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <HomePage ChatStore={AppStore.chatStore}/>
    </div>
  );
}

export default App;