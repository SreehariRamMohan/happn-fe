
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button, Chip,
  List, ListItem, ListItemAvatar, Divider, ListItemText } from '@material-ui/core';

export default function ReceivedMessage(props) {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt={props.name} src={props.pfp}/>
      </ListItemAvatar>
      <Chip label={props.message} />
    </ListItem>
  );
}

