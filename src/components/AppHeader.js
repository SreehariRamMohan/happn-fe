import React from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default function AppHeader() {

  return (
    <div style={{flexGrow: "1"}}>
      <AppBar>
        <Toolbar>
          <div style={styles.container}>
              <Typography edge="start" variant="h6"> Happen! </Typography>
              <Link to="/login" style={{textDecoration: 'none'}}>
                <Button style={{color: 'white', fontSize: "16px"}} color="inherit">Login</Button>
              </Link>
              <Link to="/chat" style={{textDecoration: 'none'}}>
                <Button style={{color: 'white', fontSize: "16px"}} color="inherit">Chat</Button>
              </Link>
              <Link to="/profile" style={{textDecoration: 'none',}}>
                <Button style={{color: 'white', fontSize: "16px"}} color="default">Profile</Button>
              </Link>
              <Link to="/questions" style={{textDecoration: 'none'}}>
                <Button style={{color: 'white', fontSize: "16px"}} color="default">Questions</Button>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", 
    justifyContent: "space-between",
    width: "100%",
  }
}