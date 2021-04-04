import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';

import { useNetwork } from './hooks/NetworkContext';

import ChatScreen from './views/ChatScreen';
import AppHeader from './components/AppHeader';
import ProfilePage from "./ProfilePage/ProfilePage"
import Login from './views/Login';
import SignUp from './views/SignUp';
import Form from './views/Questions';

const routes = [
  { path: '/', name: 'Login', Component: Login },
  { path: '/login', name: 'Login', Component: Login },
  { path: '/signup', name: 'Signup', Component: SignUp }, 
  { path: '/chats', name: 'Chats', Component: ChatScreen }, 
  { path: '/profile', name: 'Profile Page', Component: ProfilePage }, 
  { path: '/logout', name: 'Logout', Component: Login }, 
  { path: '/questionnaire', name: 'Questionaire', Component: Form }
];

function App() {

  const networkActions = useNetwork();
  // useEffect(() => {
  //   const value = networkActions.idData;
  // }, []);
  
  return (
    <div className="App">
      <AppHeader />
      <div>
        <Switch>
        {
          routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))
        }
        </Switch>
      </div>
      { JSON.stringify(networkActions.idData) }
    </div>
  );
}

export default App;
