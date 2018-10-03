import React, { Component } from 'react';
import update from 'immutability-helper';
import { Link, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import AuthLayout from './../../hoc/AuthLayout';
import InputBox from './../../component/UI/InputBox';
import { checkValidity, errorText } from '../../ultility';

import * as actions from './../../store/actions/auth.action';

export class SignUp extends Component {
  state = {
    formIsValid: false,
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
    const fieldIsValid = checkValidity(value, this.state.signUpForm[inputIdentifier].validation);
    let formIsValid = true;
    for(let field in this.state.signUpForm) {
      if(field !== inputIdentifier) {
        formIsValid = this.state.signUpForm[field].valid && formIsValid;
      } else {
        formIsValid = fieldIsValid && formIsValid;
      }
    }
    this.setState(update(this.state, 
      { 
        signUpForm: 
        { [inputIdentifier]: {
          value: {$set: value},
          valid: {$set: fieldIsValid},
          touched: {$set: true},
        }},
        formIsValid: {$set: formIsValid}
      },
    ))
  }

  signUpHandle = (event) => {
    event.preventDefault();
    //Check retype Password
    if(this.state.signUpForm.password.value === this.state.signUpForm.retypePassword.value ) {
      this.props.onSignUp(this.state.signUpForm.email.value, this.state.signUpForm.password.value);
    } else {
      alert(errorText.UNMATCH_RETYPASSWORD);
    }
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key],
      })
    }
    //Redirect if user logged
    let authRedirect = null;
    if(this.props.isLogged) {
      authRedirect = <Redirect to="/todolist" />
    }
    //Show error
    let errorCmp = null;
    if(this.props.error) {
      errorCmp = <Typography variant="subheading" color="error" align="center" className="mt-1">{this.props.error}</Typography>
    }
    return (
      <AuthLayout>
        {authRedirect}
        <Avatar className="avatar">
          <Favorite />
        </Avatar>
        <Typography variant="title">Sign Up</Typography>
        {errorCmp}
        <form className="auth-form" onSubmit={this.signUpHandle}>
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
            disabled={!this.state.formIsValid || this.props.isLoading}
          >
            {this.props.isLoading 
            ? 'Loading'
            : 'Sign Up' }
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

const mapStateToProps = state => ({
  isLogged: state.auth.token !== null,
  isLoading: state.auth.loading,
  error: state.auth.error,
})
const mapDispatchToProps = dispatch => ({
  onSignUp: (email, password) => dispatch( actions.signup(email, password)),
})

export default connect( mapStateToProps, mapDispatchToProps )( withRouter(SignUp) );