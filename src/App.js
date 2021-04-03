import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';

import ChatScreen from './views/ChatScreen';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <Button color="primary">Hello World</Button>

      <AppHeader />

      <ChatScreen />
    </div>
  );
}

export default App;
