import React from 'react';
import {useRef, useEffect} from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';

import defaultPhoto from "../res/profile_photo.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: "10px"
  },
  profileItem: {
    display: 'flex',
    width: "100%",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  profilePhoto: {
      width: "10%",
      height: "auto",
      borderRadius: "50%",
      overflow: "hidden",
      marginRight: "1vw" 
  },
  cardLayout: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
  },
  saveButton: {
    float: "right",
    marginTop:"1rem"
  }
 
 
}))

const BlackText = withStyles({
    root: {
      color: "#3a3b40"
    }
  })(Typography)

export default function ProfilePage(props) {
    const classes = useStyles();

    const blurb1 = useRef("");
    const blurb2 = useRef("");
    const blurb3 = useRef("");
    const blurb4 = useRef("");

    useEffect(() => {
      
    }, [])

    function saveProfile() {
      const payload = {
              blurb1: blurb1.current.value, 
              blurb2: blurb2.current.value, 
              blurb3: blurb3.current.value, 
              blurb4: blurb4.current.value};
      let config = {
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            }
          }
      axios.post(
        'http://localhost:5000/login',
        payload,
        config
      )
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  return (
    <div style={{marginTop: "10vh"}}>
        <CssBaseline />
        <Container component="main" maxWidth="75%">
        <Grid container spacing={3}>
        
        
            <Grid item xs={12}>
                <Paper className={classes.paper}> 
                  <div className={classes.profileItem}>

                  <img className={classes.profilePhoto} src={defaultPhoto} alt="Profile Picture" />
                  <div className="d-flex flex-column">
                    <BlackText color={classes.text} variant="h2">Mike L.</BlackText>
                    <Typography color={classes.text} variant="h4">I am a student from New Haven interested in fire fighting.</Typography>
                    
                  </div>
                  </div>
                  
                </Paper>

            </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>I value</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="coffee, long walks, the beach"
                rows={2}
                onChange={(e) => blurb1.current = e.target.value} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>Books that have changed my world view</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="why we sleep"
                rows={2}
                onChange={(e) => blurb2.current = e.target.value}/>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>My life tune</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="beatles"
                onChange={(e) => blurb3.current = e.target.value}
                rows={2}/>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>My life story</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="I grew up in a small suburb"
                onChange={(e) => blurb4.current = e.target.value}
                rows={2}/>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>Foods I would take on a desert island</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="Oatmeal"
                rows={2}/>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>Greatest movies</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="Interstellar!"
                rows={2}/>
            </div>
          </Paper>
        </Grid>
       
      </Grid>
      <Button className={classes.saveButton} variant="contained" color="primary" onClick={saveProfile}>
        Save
      </Button>
        </Container>
    </div>
  )
}