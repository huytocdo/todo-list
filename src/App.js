import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.scss';
import SignIn from './container/Auth/SignIn';
import SignUp from './container/Auth/SignUp';
import ToDo from './container/ToDo/ToDo';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/todolist" exact component={ToDo} />
        <Route path="/" exact component={SignIn} />
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div className="app">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
