import React, { Component } from 'react'

import AuthLayout from './../../hoc/Layout/AuthLayout';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Favorite from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class SignUp extends Component {
  render() {
    return (
      <AuthLayout>
        <Avatar className="avatar">
          <Favorite />
        </Avatar>
        <Typography variant="title">Sign Up</Typography>
        <form className="auth-form">
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
              id="retype-password"
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              type="button"
              fullWidth
              variant="raised"
              color="default"
              className="mt-1"
            >
              Go Back
            </Button>
          </Link>
        </form>
      </AuthLayout>
    )
  }
}