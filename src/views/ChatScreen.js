import React from 'react';

import { Box, Button } from '@material-ui/core';
import PersonCard from '../components/PersonCard';
import ReceivedMessage from '../components/ReceivedMessage';

export default function ChatScreen() {
  return (
    <Box display="flex" flexDirection="row">
      <div style={styles.contactsContainer}>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
      </div>
      <div style={styles.chatContainer}>
        <ReceivedMessage/>
        <ReceivedMessage/>
        <ReceivedMessage/>
      </div>
    </Box>
  );
}

const styles = {
  contactsContainer: {
    width: "24vw",
    flexDirection: "col",
    overflowY: "scroll",
    maxHeight: "80vh"
  }, 
  chatContainer: {
    width: "80vw",
    overflowY: "scroll",
    // border: "3px solid black"
  }
}

