
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button, Slider,
  List, ListItem, ListItemAvatar, Divider, ListItemText } from '@material-ui/core';

export default function PersonCard(props) {
  return (
    <React.Fragment>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.pfp} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.message}
        />
      </ListItem>
      <br/>
      <Slider
        style={{width: "70%"}}
        defaultValue={10}
        aria-labelledby="discrete-slider"
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="on"
        disabled
      />
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

