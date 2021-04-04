import React from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import ChatScreen from "../views/ChatScreen"
import ProfilePage from "../ProfilePage/ProfilePage"
import Form from "../Questions"

export default function AppHeader() {
  return (
    <div style={{flexGrow: "1"}}>
      <AppBar>
        <Toolbar>
          <div style={styles.container}>
            <Typography edge="start" variant="h6"> Happn</Typography>
            <Typography>Chats</Typography>
            <Typography>Profile Page</Typography>
            <Typography>Question responses</Typography>
            <Typography>Logout</Typography>
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
    width: "50%",
  }
}
