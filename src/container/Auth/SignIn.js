import React from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import AuthLayout from './../../hoc/AuthLayout';
import InputBox from './../../component/UI/InputBox';
import { checkValidity } from '../../ultility';



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

  render() {
    const formElementsArray = [];
    for (let key in this.state.signInForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signInForm[key],
      })
    }
    return (
      <AuthLayout>
        <Avatar className="avatar">
          <LockIcon />
        </Avatar>
        <Typography variant="title">Sign in</Typography>
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
            disabled={!this.state.formIsValid}
          >
            Sign in
          </Button>
          <Button
            type="button"
            fullWidth
            variant="raised"
            className="mt-1"
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
      </AuthLayout>
    );
  }
}

export default SignIn
