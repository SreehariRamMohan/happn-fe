import React from 'react';
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
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  profilePhoto: {
      width: "50%",
      height: "auto",
      borderRadius: "20%",
      overflow: "hidden" 
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
  return (
    <div style={{marginTop: "10vh"}}>
        <CssBaseline />
        <Container component="main" maxWidth="75%">
        <Grid container spacing={3}>
        
        <div className={classes.profileItem}>
            <Grid item xs={6}>
                <img className={classes.profilePhoto} src={defaultPhoto} alt="Profile Picture" />
            </Grid>
            <Grid item xs={6}>
                <BlackText color={classes.text} variant="h1">Mike L.</BlackText>
            </Grid>
        </div>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.cardLayout}>
                <BlackText>I value</BlackText>
                <TextField
                id="standard-multiline-static"
                multiline
                placeholder="coffee, long walks, the beach"
                rows={2}/>
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
                rows={2}/>
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
                rows={2}/>
            </div>
          </Paper>
        </Grid>
       
      </Grid>
      <Button className={classes.saveButton} variant="contained" color="primary">
        Save
      </Button>
        </Container>
    </div>
  )
}