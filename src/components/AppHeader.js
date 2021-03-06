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
  const routes_public = ['login'];
  const routes = ['questionnaire', 'profile', 'chats', 'logout'];
  // alert(location.pathname);

  return (
    <div style={{flexGrow: "1"}}>
      <AppBar>
        <Toolbar>
          <div style={styles.container}>

            <WhiteNavItem edge="start" variant="h6"> Happn</WhiteNavItem>

            {location.pathname.includes("login") || location.pathname.includes("signup") || location.pathname.includes("logout") || (location.pathname === "/") ? routes_public.map((aName) => 
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
