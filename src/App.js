import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';

import ChatScreen from './views/ChatScreen';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div style={{marginTop: "10vh"}}>
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
