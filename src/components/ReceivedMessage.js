
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function ReceivedMessage() {
  return (
    <div style={styles.cardOutline}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={styles.avatar}/>
      <Typography variant="h5" component="h2"> i cannot </Typography>
    </div>
  );
}

const styles = {
  cardOutline: {
    border: "1px solid black",
    display: "flex", 
    // flexDirection: "row",
    // alignItems: "center",
    // width: "84%",
    //
    //
    // backgroundColor: "blue",
    padding: "2rem",
  }, 
  avatar: {
    marginRight: "1rem",
  }
}

