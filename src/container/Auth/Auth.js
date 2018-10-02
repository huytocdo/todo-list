import React from 'react';

import Typography from '@material-ui/core/Typography';
import SignInForm from './../../component/SignInForm/SignInForm';

class Auth extends React.Component {
  render() {
    return (
      <div className="auth-wrapper">
        <Typography variant="display3">
          To Do List
        </Typography>
        <SignInForm />
      </div>
    );
  }
}

export default Auth
