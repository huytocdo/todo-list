import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './SignInForm.scss';

export default class SignInForm extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className="sign-in-wrapper">
          <Paper className="sign-in-box">
            <Avatar className="avatar">
              <LockIcon />
            </Avatar>
            <Typography variant="title">Sign in</Typography>
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
                type="button"
                fullWidth
                variant="raised"
                color="primary"
                className="mt-1"
              >
                Sign in
              </Button>
              <Button
                type="button"
                fullWidth
                variant="raised"
                className="mt-1 github-color"
              >
                Sign in with Github
              </Button>
              <Typography variant="title" align="center" className="mt-1">Or</Typography>
              <Link to="signup" style={{ textDecoration: 'none' }}>
                <Button
                  type="button"
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
}