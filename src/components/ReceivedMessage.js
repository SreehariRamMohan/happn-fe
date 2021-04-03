
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button, Chip,
  List, ListItem, ListItemAvatar, Divider, ListItemText } from '@material-ui/core';

export default function ReceivedMessage() {

  {

  //       <ListItemText
  //         primary={props.name}
  //         secondary={props.message}
  //       />
  }
  return (
    <ListItem alignItems="center">

      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={styles.avatar}/>
      </ListItemAvatar>

      <Chip label={"I cannot"} />

    </ListItem>
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

