import React, { Component } from 'react';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import AuthLayout from './../../hoc/AuthLayout';
import InputBox from './../../component/UI/InputBox';
import { checkValidity } from '../../ultility';

export default class SignUp extends Component {
  state = {
    signUpForm: {
      email: {
        elementType: 'email',
        label: 'Email Address',
        inputType: 'email',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'password',
        label: 'Password',
        helperText: 'Minimum 8 characters',
        inputType: 'password',
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false,
      },
      retypePassword: {
        elementType: 'retypePassword',
        label: 'Retype Password',
        helperText: 'Minimum 8 characters',
        inputType: 'password',
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false,
      },
    }
  }

  inputChangedHandler = (value, inputIdentifier) => {
    this.setState(update(this.state, 
      { signUpForm: 
        { [inputIdentifier]: {
          value: {$set: value},
          valid: {$set: checkValidity(value, this.state.signUpForm[inputIdentifier].validation)},
          touched: {$set: true},
        }}}))
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key],
      })
    }
    return (
      <AuthLayout>
        <Avatar className="avatar">
          <Favorite />
        </Avatar>
        <Typography variant="title">Sign Up</Typography>
        <form className="auth-form">
          {formElementsArray.map(formEle => (
              <InputBox 
                key={formEle.id}
                label={formEle.config.label}
                helper={formEle.config.helperText} 
                elementType={formEle.config.elementType}
                inputType={formEle.config.inputType}
                valid={formEle.config.valid}
                touched={formEle.config.touched}
                value={formEle.config.value}
                changed={(value) => this.inputChangedHandler(value, formEle.id)}
              />
            ))}
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