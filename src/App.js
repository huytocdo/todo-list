import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import SignIn from './container/Auth/SignIn';
import SignUp from './container/Auth/SignUp';
import Logout from './container/Auth/Logout';
import ToDo from './container/ToDo/ToDo';
import * as actions from './store/actions/index.action';
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={SignIn} />
        <Redirect to="/" />
      </Switch>
    )

    if( this.props.isLogged) {
      routes = (
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/todolist" exact component={ToDo} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={SignIn} />
          <Redirect to="/" />
      </Switch>
      )
    }
    return (
      <div className="app">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( App ));
