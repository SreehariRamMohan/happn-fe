import React, { useState, useEffect } from 'react';

import { io } from "socket.io-client";


import SendIcon from '@material-ui/icons/Send';
import { Box, Button, TextField, IconButton,
List, ListItem, ListItemAvatar, Avatar, Typography, Divider, ListItemText} from '@material-ui/core';
import PersonCard from '../components/PersonCard';
import ReceivedMessage from '../components/ReceivedMessage';
import SentMessage from '../components/SentMessage';
import { useNetwork } from '../hooks/NetworkContext';
import { WEBSOCKET_URL } from '../constants';

export default function ChatScreen(props) {

  const [currentlyMessaging, setCurrentlyMessaging] = useState("kevin");
  const [inputText, setInputText] = useState("");

  const [messages, setMessages] = useState([
    { sentByMe: true, message: "hello" }, 
    { sentByMe: false, name: currentlyMessaging, message: "hiii", pfp: "#" }, 
    { sentByMe: true, message: "hello" }, 
    { sentByMe: true, message: "hello" }, 
    { sentByMe: false, name: currentlyMessaging, message: "hiii", pfp: "#" }, 
    { sentByMe: false, name: currentlyMessaging, message: "hiii", pfp: "#" }, 
    { sentByMe: false, name: currentlyMessaging, message: "hiii", pfp: "#" }
  ]);

  const [contacts, setContacts] = useState([
    { name: "Kevin", message: "hello", pfp: "#" },
    { name: "fc6ea4f3-86c0-4f2d-a64f-7b65f42f4ec3", message: "Ooh have you listened to Drax Project's latest album?", pfp: "#" },
    { name: "81f6d31e-480f-485d-a69f-6e0a2d0b40fd", message: "I've been trying to land a kickflip since forever", pfp: "#" },
    { name: "38ee6466-a322-47a2-afd5-1c75a7f17aa6", message: "yep i can make a chat and stuff", pfp: "#" },
    { name: "b053bee6-bffb-4ae4-a40f-475239df7976", message: "Go read Sarah J. Maas' new book", pfp: "#" },
    { name: "0c2bfdd7-4409-4fd9-90b3-0beb033bbac4", message: "Hi!", pfp: "#" },
    { name: "bc054229-edf1-4f7e-9fde-e697a49dd6d9", message: "Who's your favorite author?", pfp: "#" },
    { name: "4b4762c7-339d-4280-904f-6f13782a7eae", message: "Hi!", pfp: "#" },
    { name: "3533c4a7-e727-423d-9e5f-6c1d960c08c4", message: "helloooo", pfp: "#" },
    { name: "c38b6f0a-e16c-4700-b3aa-8136980a88dd", message: "Hi!", pfp: "#" },
  ]);

  const networkActions = useNetwork();
  const my_friend_code = networkActions.idData.friend_code ?? "46ffb587-69a2-483f-9c4d-c6b4c8e07f96";
  const socket = io(WEBSOCKET_URL, { query: `friend_code=${my_friend_code}` });

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected);
    });

    socket.on("receive_message", (data) => {
      console.log(JSON.stringify(data, null, 2));
      let message = data.message;
      let friend_code = data.friend_code;

      let newMessages = [...messages];
      newMessages.push({ sentByMe: false, name: currentlyMessaging, message: message, pfp: "#" });
      setMessages(newMessages);
    });
  }, []);

  function changeMessageChat(newContactName) {
    if (newContactName !== currentlyMessaging) {
      setCurrentlyMessaging(newContactName);
    }
  }

  function sendMessageToSocketServer() {
    const receiptant_friend_code = "user2";

    // let message = "dummyMessage";
    let message = inputText;
    socket.emit("send_message", {
      "message": message,
      "sender_friend_code": my_friend_code, 
      "receiver_friend_code": receiptant_friend_code 
    });

    let newMessages = [...messages];
    newMessages.push({ sentByMe: true, message: message });
    setMessages(newMessages);
    console.log("sent message to the socket server");
    setInputText("");
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginTop: "10vh"}}>
      <div style={styles.contactsContainer}>
        {
          contacts.map((aContact, index) =>  {
            let firstMessage = messages[messages.length - 1].message;
            return (
            <div onClick={() => changeMessageChat(aContact.name)}>
              <PersonCard 
                name={aContact.name} 
                message={(index === 0) ? firstMessage : aContact.message} 
                pfp={aContact.pfp}
              />
            </div>);
          }
          )
        }
      </div>

      <div style={styles.chatContainer}>

        <Typography variant="h4" gutterBottom>
          { currentlyMessaging }
        </Typography>

        <div style={styles.messageBox}>

          { 
            messages.map((aMessage) => {
              if (aMessage.sentByMe) {
                return <SentMessage message={aMessage.message}/>
              }
              else {
                return <ReceivedMessage name={aMessage.name} message={aMessage.message} pfp={aMessage.pfp} />
              }

            })
          }
        </div>

        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            id="outlined-required"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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

