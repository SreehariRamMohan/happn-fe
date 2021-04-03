import React from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

export default function AppHeader() {
  return (
    <div style={{flexGrow: "1"}}>
      <AppBar>
        <Toolbar>
          <div style={styles.container}>
            <Typography edge="start" variant="h6"> Happen! </Typography>
            <Button color="inherit">Login</Button>
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
