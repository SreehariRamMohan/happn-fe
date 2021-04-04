import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { useNetwork } from './hooks/NetworkContext';

import ChatScreen from './views/ChatScreen';
import AppHeader from './components/AppHeader';
import ProfilePage from "./ProfilePage/ProfilePage"
import Login from './views/Login';
import SignUp from './views/SignUp';
import Form from './views/Questions';

const routes = [
  { path: '/', name: 'Login', Component: ChatScreen },
  { path: '/login', name: 'Login', Component: Login },
  { path: '/signup', name: 'Signup', Component: SignUp }, 
  { path: '/chats', name: 'Chats', Component: ChatScreen }, 
  { path: '/profilePage', name: 'Profile Page', Component: ProfilePage }, 
  { path: '/logout', name: 'Logout', Component: Login }, 
  { path: '/questionaire', name: 'Questionaire', Component: Form }
];

function App() {

  // const networkActions = useNetwork();
  // useEffect(() => {
  //   const value = networkActions.idData;
  // }, []);
  
  return (
    <div className="App">
        <AppHeader />
        <div style={{marginTop: "10vh"}}>
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
    </div>
  );
}

export default App;
