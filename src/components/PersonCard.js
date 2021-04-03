
import React from 'react';

import { Avatar, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function PersonCard() {
  return (
    <Card variant="outlined" style={styles.cardOutline}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={styles.avatar}/>
      <Typography variant="h5" component="h2">
        hello
      </Typography>
    </Card>
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

