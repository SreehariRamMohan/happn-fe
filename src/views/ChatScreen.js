import React, { useState, useEffect } from 'react';

import { io } from "socket.io-client";


import SendIcon from '@material-ui/icons/Send';
import { Box, Button, TextField, IconButton,
List, ListItem, ListItemAvatar, Avatar, Typography, Divider, ListItemText} from '@material-ui/core';
import PersonCard from '../components/PersonCard';
import ReceivedMessage from '../components/ReceivedMessage';
import SentMessage from '../components/SentMessage';

export default function ChatScreen(props) {

  const [contacts, setContacts] = useState([
    { name: "kevin", message: "hello!fawlohfaiewrlerihglirheg!! i am stuck in the chat please save me i can't take this anymor-", pfp: "#" },
    { name: "Sree", message: "To the sweet balm of coffee, by the grace of which we shall accomplish the task before us", pfp: "#" },
    { name: "Emily", message: "I had mentally decided not to be a part of this conversation, but based on the direction this is going in, I have to interject. ", pfp: "#" },
    { name: "Gareth", message: "yep i can make a chat and stuff", pfp: "#" },
    { name: "kevin", message: "She’s clearly shocked by my behavior. She should be. My behavior is shocking. ", pfp: "#" },
    { name: "Sree", message: "Hi!", pfp: "#" },
    { name: "Emily", message: "Hi!", pfp: "#" },
    { name: "Gareth", message: "Hi!", pfp: "#" },
    { name: "kevin", message: "hello!fawlohfaiewrlerihglirheg!! i am stuck in the chat please save me i can't take this anymor-", pfp: "#" },
    { name: "Sree", message: "Hi!", pfp: "#" },
    { name: "Emily", message: "Hi!", pfp: "#" },
    { name: "Gareth", message: "Hi!", pfp: "#" },
  ]);

  const [currentlyMessaging, setCurrentlyMessaging] = useState(contacts[0].name);

  const my_friend_code = "user1";
  const socket = io("ws://localhost:5000/websockets", { query: `friend_code=${my_friend_code}` });

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected);
    });

    socket.on("receive_message", (data) => {
      console.log(JSON.stringify(data, null, 2));
    });
  }, []);

  function changeMessageChat(newContactName) {
    if (newContactName !== currentlyMessaging) {
      setCurrentlyMessaging(newContactName);
    }
  }

  function sendMessageToSocketServer() {
    const receiptant_friend_code = "user2";
    socket.emit("send_message", {
      "message": "dummyMessage",
      "sender_friend_code": my_friend_code, 
      "receiver_friend_code": receiptant_friend_code 
    });
    console.log("sent message to the socket server");
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="flex-end">
      <div style={styles.contactsContainer}>
        {
          contacts.map((aContact) => 
            <div onClick={() => changeMessageChat(aContact.name)}>
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

        <div style={styles.messageBox}>
          <ReceivedMessage name="kevin" message="hi" pfp="#"/>
          <ReceivedMessage name="kevin" message="hi" pfp="#"/>
          <SentMessage message="what"/>
          <ReceivedMessage name="kevin" message="hi" pfp="#"/>
          <SentMessage message="hi"/>
        </div>

        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            id="outlined-required"
            defaultValue="There will be moments when you have to be a grown-up. Those moments are tricks.  Do not fall for them. "
            variant="outlined"
            style={{ width: "92%" }}
          />

          <IconButton 
            aria-label="send" 
            style={{marginLeft: "0.4rem"}}
            onClick={() => sendMessageToSocketServer()}
          >
            <SendIcon style={{fontSize: 50}}/>
          </IconButton>
        </Box>
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
  messageBox: {
    height: "70vh",
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

