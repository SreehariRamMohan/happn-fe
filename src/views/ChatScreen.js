import React, { useState } from 'react';

import SendIcon from '@material-ui/icons/Send';
import { Box, Button, TextField,
List, ListItem, ListItemAvatar, Avatar, Typography, Divider, ListItemText} from '@material-ui/core';
import PersonCard from '../components/PersonCard';
import ReceivedMessage from '../components/ReceivedMessage';

export default function ChatScreen() {

  const [contacts, setContacts] = useState([
    { name: "kevin", message: "hello!fawlohfaiewrlerihglirheg!! i am stuck in the chat please save me i can't take this anymor-", pfp: "#" },
    { name: "Sree", message: "“Truly you have a dizzying intellect,” whispered the man in black.", pfp: "#" },
    { name: "Emily", message: "Hi!", pfp: "#" },
    { name: "Gareth", message: "Hi!", pfp: "#" },
    { name: "kevin", message: "hello!fawlohfaiewrlerihglirheg!! i am stuck in the chat please save me i can't take this anymor-", pfp: "#" },
    { name: "Sree", message: "Hi!", pfp: "#" },
    { name: "Emily", message: "Hi!", pfp: "#" },
    { name: "Gareth", message: "Hi!", pfp: "#" },
    { name: "kevin", message: "hello!fawlohfaiewrlerihglirheg!! i am stuck in the chat please save me i can't take this anymor-", pfp: "#" },
    { name: "Sree", message: "Hi!", pfp: "#" },
    { name: "Emily", message: "Hi!", pfp: "#" },
    { name: "Gareth", message: "Hi!", pfp: "#" },
  ]);

  const [currentlyMessaging, setCurrentlyMessaging] = useState(contacts[0].name);

  return (
    <Box display="flex" flexDirection="row">
      <div style={styles.contactsContainer}>
        {
          contacts.map((aContact) => 
            <div onClick={() => alert(aContact.name)}>
              <PersonCard 
                name={aContact.name} 
                message={aContact.message} 
                pfp={aContact.pfp}
              />
            </div>
          )
        }
      </div>

      <div style={styles.chatContainer}>
        { currentlyMessaging }
        <ReceivedMessage/>
        <ReceivedMessage/>
        <ReceivedMessage/>

        <TextField
          fullWidth
          id="outlined-required"
          defaultValue="There will be moments when you have to be a grown-up. Those moments are tricks.  Do not fall for them.
"
          variant="outlined"
        />
        <SendIcon/>
      </div>
    </Box>
  );
}

const styles = {
  contactsContainer: {
    width: "28vw",
    flexDirection: "col",
    overflowY: "scroll",
    maxHeight: "80vh"
  }, 
  chatContainer: {
    width: "66vw",
    overflowY: "scroll",
  },

  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  inline: {
    display: 'inline',
  },
}

