import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';

import ChatScreen from './views/ChatScreen';
import AppHeader from './components/AppHeader';
import ProfilePage from "./ProfilePage/ProfilePage";
import Login from './Login';
import Form from './Questions';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>
            <AppHeader />
            <div style={{marginTop: "10vh"}}>
            <Switch>
              <Route path="/login">
                 <Login />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/chat">
                <React.Fragment>
                    <ChatScreen username="user1"/>
                    <ChatScreen username="user2"/>
                  </React.Fragment>
              </Route>
              <Route path="/questions">
                <Form />
              </Route>
              <Route path="/signup">
                 <SignUp />
              </Route>
            </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
