import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';


import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

import NavigationBar from './../../component/NavigationBar';
import ToDoItem from './../../component/ToDoItem';
import * as actions from './../../store/actions/index.action';
import { createIndex } from './../../ultility';

const styles = theme => ({
  root: {
    ...theme.typography.display1,
  }
})

class ToDo extends Component {
  state = {
    todoInput: '',
  }

  inputChangeHandler = (event) => {
    this.setState(update(this.state, {todoInput: {$set: event.target.value}}));
  }

  submitTodo = () => {
    const index = createIndex(this.props.todos);
    this.setState(update(this.state, {todoInput: {$set: ''}}));
    this.props.onAddTodo(this.props.token, this.props.uid, this.state.todoInput, index);
  }

  componentDidMount() {
    this.props.onFetchTodo(this.props.token, this.props.uid)
  }

  render() {
    let todoListCmp = null;
    if(this.props.todos) {
      todoListCmp = this.props.todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.status} />
      ))
      todoListCmp.reverse();
    }

    return (
      <>
        <NavigationBar />
        <div className="todo-layout">
          <CssBaseline />
          <Typography variant="display3" className="mt-1">
            To Do List
          </Typography>
          <div className="todo-wrapper">
            <div className="row">
              <Checkbox 
                icon={<Icon>keyboard_arrow_down</Icon>} 
                checkedIcon={<Icon>keyboard_arrow_up</Icon>} 
                classes={{
                  root: 'check-box',
                  checked: 'checked',
                }}
                value="checkedH" 
              />
              <input 
                className={[this.props.classes.root, 'todo-input'].join(' ')}
                value={this.state.todoInput}
                onChange={this.inputChangeHandler} 
                onKeyPress={(e) => e.key === 'Enter' ? this.submitTodo() : null}
              />
              <IconButton className="add-button" onClick={this.submitTodo}>
                <Icon>add</Icon>
              </IconButton>
            </div>
            {todoListCmp}
            <div className="row filter-box">
              <Typography variant="body1" color="inherit">{this.props.todos.length}  item left</Typography>
              <ToggleButtonGroup value="left" exclusive>
                <ToggleButton value="left" classes={{root: 'font-size-1'}}>
                  All
                </ToggleButton>
                <ToggleButton value="center" classes={{root: 'font-size-1'}}>
                  Active
                </ToggleButton>
                <ToggleButton value="right" classes={{root: 'font-size-1'}}>
                  Completed
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  token: state.auth.token,
  todos: state.todo.todos,
})
const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch( actions.signout() ),
  onAddTodo: (token, uid, todoText, index) => dispatch( actions.addTodo(token, uid, todoText, index, false)),
  onFetchTodo: (token, uid) => dispatch( actions.fetchTodo(token, uid))
})

export default connect( mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToDo));
