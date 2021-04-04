import React, { useRef } from 'react';
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

import axios from 'axios';
import { useNetwork } from '../hooks/NetworkContext';
import { URL, AXIOS_CONFIG } from '../constants';

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

export default function Form() {
  const classes = useStyles();

  const q1 = useRef("");
  const q2 = useRef("");
  const q3 = useRef("");
  const q4 = useRef("");
  const q5 = useRef("");

  function submitHandler(event) {
    const toSend = {fq1: q1, fq2: q2, fq3: q3, fq4: q4, fq5: q5};
    axios.post(
      URL + "uploadFormData",
      toSend,
      AXIOS_CONFIG
    ).then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentOutlinedIcon />
        </Avatar>
        <center><Typography component="h1" variant="h5">
          Answer these questions for matching to <b>happn</b>!
        </Typography></center>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                What is your favorite childhood memory?
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => q1.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Describe your music taste.
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => q2.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                If you had to describe yourself as an animal, what would it be and why?
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => q3.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                If you were invincible for a day, what would you do?
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => q4.current = event.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                What’s the longest you’ve gone without sleep and why?
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => q5.current = event.target.value}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
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
