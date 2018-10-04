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
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import NavigationBar from './../../component/NavigationBar';
import ToDoItem from './../../component/ToDoItem';
import * as actions from './../../store/actions/index.action';
import { guid, filterType } from './../../ultility';

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
    const todoId = guid();
    this.props.onAddTodo(todoId, this.state.todoInput, false);
    this.setState(update(this.state, {todoInput: {$set: ''}}));
  }

  changeAllStatusHandler = (event) => {
    if(event.target.checked) {
      this.props.onCompleteAll();
    } else {
      this.props.onUncompleteAll();
    }
  }

  filterHandler = (e, value) => {
    if(value) {
      this.props.onChangeFilter(value);
    }
  }

  componentDidMount() {
    this.props.onFetchTodo(this.props.token, this.props.uid)
  }

  render() {
    let filterArr = []
    if(this.props.todos) {
      switch (this.props.filter) {
        case filterType.ACTIVE:
          filterArr = this.props.todos.filter(todo => !todo.status);  
          break;
        case filterType.COMPLETED:
          filterArr = this.props.todos.filter(todo => todo.status);
          break;
        default:
          filterArr = this.props.todos.filter(() => true);
          break;
      }
    }

    let todoListCmp = null;
    if(filterArr || !this.props.loading) {
      todoListCmp = filterArr.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.status} 
          removeHandler={() => this.props.onRemoveTodo(todo.id)}
          changeStatusHandler={() => this.props.onChangeStatus(todo.id)}/>
      ))
      todoListCmp.reverse();
    }

    return (
      <>
        <NavigationBar 
          email={this.props.email}
          handleSave={() => this.props.onSaveTodos(this.props.uid, this.props.token, this.props.todos)}
          loading={this.props.loading}
        />
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
                onChange={(event) => this.changeAllStatusHandler(event)}
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
            {this.props.loading 
            ? <Grid
                container
                className="mt-1"
                justify="center" >
                <CircularProgress size={80} />
              </Grid>
            : todoListCmp}
            <div className="row filter-box">
              <Typography variant="body1" color="inherit">{this.props.todos.length}  item left</Typography>
              <ToggleButtonGroup value={this.props.filter} onChange={this.filterHandler} exclusive>
                <ToggleButton value={filterType.ALL} classes={{root: 'font-size-1'}}>
                  All
                </ToggleButton>
                <ToggleButton value={filterType.ACTIVE} classes={{root: 'font-size-1'}}>
                  Active
                </ToggleButton>
                <ToggleButton value={filterType.COMPLETED} classes={{root: 'font-size-1'}}>
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
  email: state.auth.email,
  todos: state.todo.todos,
  filter: state.todo.filter,
  loading: state.todo.loading,
})
const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch( actions.signout() ),
  onFetchTodo: (token, uid) => dispatch( actions.fetchTodo(token, uid)),
  onAddTodo: (todoId, todoText, status) => dispatch( actions.addTodo(todoId, todoText, status)),
  onRemoveTodo: (todoId) => dispatch(actions.removeTodo(todoId)),
  onChangeStatus: (todoId) => dispatch(actions.changeTodoStatus(todoId)),
  onCompleteAll: () => dispatch(actions.completeAllTodo()),
  onUncompleteAll: () => dispatch(actions.uncompleteAllTodo()),
  onChangeFilter: (filterType) => dispatch(actions.changeTodoFilter(filterType)),
  onSaveTodos: (uid, token, todos) => dispatch(actions.saveTodos(uid, token, todos))
})

export default connect( mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToDo));
