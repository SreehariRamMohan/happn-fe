import React from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom'


const WhiteNavItem = withStyles({
  root: {
    color: "#f5f9ff"
  }
})(Typography)

const useStyles = makeStyles((theme) => ({
  navlink: {
    textDecoration: "none",
    color: "white"
  }
 
 
}))

export default function AppHeader() {
  const classes = useStyles();

  const location = useLocation();

  //'signup'
  const routes_public = ['Login'];
  const routes = ['questionnaire', 'profile', 'chats', 'logout'];

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
            <WhiteNavItem edge="start" variant="h6"> Happen! </WhiteNavItem>

            {location.pathname.includes("Login") || location.pathname.includes("Logout") ? routes_public.map((aName) => 
              <Typography variant="h6">
                <NavLink className={classes.navlink} to={ `/${aName}` }>
                    {aName}
                </NavLink>
              </Typography>)
              :
              routes.map((aName) => 
              <Typography variant="h6">
                <NavLink className={classes.navlink} to={ `/${aName}` }>
                    {aName}
                </NavLink>
              </Typography>)
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
    width: "50%",
  }
}