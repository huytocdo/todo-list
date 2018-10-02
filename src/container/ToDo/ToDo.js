import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
import ToDoInput from './../../component/ToDoInput/ToDoInput';
import ToDoList from './../../component/ToDoList/ToDoList';
import Filter from './../../component/Filter/Filter';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class ToDo extends Component {
  render() {
    return (
      <div className="to-do">
        <CssBaseline />
        <Typography variant="display3" className="mt-1">
          To Do List
        </Typography>
        <div className="to-do-list-wrapper">
          <ToDoInput />
          <ToDoList />
          <Filter />
        </div>
      </div>
    )
  }
}
