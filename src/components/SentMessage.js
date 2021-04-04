
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button, Chip,
  List, ListItem, ListItemAvatar, Divider, ListItemText } from '@material-ui/core';

export default function SentMessage(props) {
  return (
    <React.Fragment>
      <ListItem>
        <div style={{position: "absolute", right: "1rem"}}>
          <Chip label={props.message} />
        </div>
      </ListItem>
      <br />
      <br />
    </React.Fragment>
  );
}

