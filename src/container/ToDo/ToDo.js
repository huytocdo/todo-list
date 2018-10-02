import React, { Component } from 'react';

import {Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Filter from './../../component/Filter';
import NavigationBar from './../../component/NavigationBar';
import ToDoItem from './../../component/ToDoItem';

const styles = theme => ({
  root: {
    ...theme.typography.display1,
  }
})

class ToDo extends Component {

  render() {
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
              <input className={[this.props.classes.root, 'todo-input'].join(' ')} />
              <IconButton className="add-button">
                <Icon>add</Icon>
              </IconButton>
            </div>
            <ToDoItem
              id="abc"
              text="Hello wolrd"
              completed
            />
            <Filter />
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(ToDo);
