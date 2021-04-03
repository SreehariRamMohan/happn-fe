
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button,
  List, ListItem, ListItemAvatar, Divider, ListItemText } from '@material-ui/core';

export default function PersonCard(props) {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.pfp} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.message}
        />
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}

const styles = {
  cardOutline: {
    display: "flex", 
    flexDirection: "row",
    alignItems: "center",
    width: "84%",
    padding: "2rem",
  }, 
  avatar: {
    marginRight: "1rem",
  }
}

