import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Favorite from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './SignUpForm.scss';

function SignUp(props) {
  console.log(props);
  return (
    <React.Fragment>
      <CssBaseline />
      <main className="sign-up-tab-wrapper">
        <Paper className="sign-up-box">
          <Avatar className="avatar">
            <Favorite />
          </Avatar>
          <Typography variant="h5">Sign Up</Typography>
          <form className="sign-in-form">
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Retype Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className="mt-1"
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default SignUp;