import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SignUpForm from './../SignUpForm/SignUpForm';

import './SignInForm.scss';

function SignIn(props) {
  console.log(props);
  return (
    <React.Fragment>
      <CssBaseline />
      <main className="sign-in-tab-wrapper">
        <Paper className="sign-in-box">
          <Avatar className="avatar">
            <LockIcon />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
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
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className="mt-1"
            >
              Sign in
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              className="mt-1 github-color"
            >
              Sign in with Github
            </Button>
            <Typography variant="h5" align="center" className="mt-1">Or</Typography>
            <Link to="/signup">
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="secondary"
                className="mt-1"
              >
                Sign Up A New Account
              </Button>
            </Link>
            
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SignIn;