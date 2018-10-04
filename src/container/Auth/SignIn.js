import React from 'react';
import { Redirect } from 'react-router-dom';
import update from 'immutability-helper';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import AuthLayout from './../../hoc/AuthLayout';
import InputBox from './../../component/UI/InputBox';
import { checkValidity } from '../../ultility';
import Link from './../../component/UI/Link';

import * as actions from './../../store/actions/index.action';

class SignIn extends React.Component {
  state = {
    signInForm: {
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
      }
    }
  }

  inputChangedHandler = (value, inputIdentifier) => {
    const fieldIsValid = checkValidity(value, this.state.signInForm[inputIdentifier].validation);
    
    let formIsValid = true;
    for(let field in this.state.signInForm) {
      if(field !== inputIdentifier) {
        formIsValid = this.state.signInForm[field].valid && formIsValid;
      } else {
        formIsValid = fieldIsValid && formIsValid;
      }
    }
    this.setState(update(this.state, 
      { signInForm: 
        { [inputIdentifier]: {
          value: {$set: value},
          valid: {$set: checkValidity(value, this.state.signInForm[inputIdentifier].validation)},
          touched: {$set: true},
        }},
        formIsValid: {$set: formIsValid},
      }
    ))
  }

  signinHandler = (event) => {
    event.preventDefault();
    this.props.onSignIn(this.state.signInForm.email.value, this.state.signInForm.password.value);
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.signInForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signInForm[key],
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
          <LockIcon />
        </Avatar>
        <Typography variant="title">Sign in</Typography>
        {errorCmp}
        <form className="auth-form" onSubmit={this.signinHandler}>
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
            ? 'Loading...' 
            : 'Sign in' }
          </Button>
          {/* <Button
            type="button"
            fullWidth
            variant="raised"
            className="mt-1"
          >
            Sign in with Github
          </Button> */}
          <Typography variant="title" align="center" className="mt-1">Or</Typography>
          <Link to="signup">
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
      </AuthLayout>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.auth.token !== null,
  isLoading: state.auth.loading,
  error: state.auth.error,
})
const mapDispatchToProps = dispatch => ({
  onSignIn: (email, password) => dispatch( actions.signin(email, password)),
})

export default connect( mapStateToProps, mapDispatchToProps )( SignIn );
