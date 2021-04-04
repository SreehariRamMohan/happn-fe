import React from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {

  const routes = ['login', 'signup', 'chats', 'profilePage', 'logout', 'questionaire'];
  return (
    <div style={{flexGrow: "1"}}>
      <AppBar>
        <Toolbar>
          <div style={styles.container}>
            <Typography edge="start" variant="h6"> Happen! </Typography>

            { routes.map((aName) => 
              <NavLink to={ `/${aName}` }>
                <Button variant="contained">
                  {aName}
                </Button>
              </NavLink>

              )
            }

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
