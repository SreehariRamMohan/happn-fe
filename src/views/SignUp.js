import {React, useState, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useNetwork } from '../hooks/NetworkContext';
import { URL, AXIOS_CONFIG } from '../constants';
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Happn '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Made with 💕 from Providence, RI'}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();

  const [image, setImage] = useState(null);


  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const pass = useRef("");
  const bio = useRef("");

  const networkActions = useNetwork();
  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()
    const toSend = {username: email.current, password: pass.current};
    axios.post(
      URL + "signup",
      toSend,
      AXIOS_CONFIG
    )
      .then(response => {
        console.log(response.data);
        let data = response.data;
        networkActions.updateIdData({ 'mongo_id': data.mongo_id, 'friend_code': data.friend_code });
        history.push("/questionnaire");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentOutlinedIcon />
        </Avatar>
        <center><Typography component="h1" variant="h5">
          Create an account!
        </Typography></center>
        <form className={classes.form} noValidate>
          <center>
            <Avatar style={{height: 70, width: 70}} src={image}>
            </Avatar>
          </center>
          <br />
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => email.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => pass.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                name="bio"
                label="Bio"
                id="bio"
                onChange={(event) => bio.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                onChange={onImageChange}
              >
                Upload Profile Picture
                <input
                  type="file"
                  hidden
                />
              </Button>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Make it happn!
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
