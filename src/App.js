import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.scss';
import Auth from './container/Auth/Auth';
import SignUpForm from './component/SignUpForm/SignUpForm';
import ToDo from './container/ToDo/ToDo';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/signup" exact component={SignUpForm} />
        <Route path="/todolist" exact component={ToDo} />
        <Route path="/" exact component={Auth} />
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
