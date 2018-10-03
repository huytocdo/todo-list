import * as actionTypes from './../actions/actionTypes';
import update from 'immutability-helper';
import {errorText} from './../../ultility';

const initialState = {
  todos: [],
  loading: false,
  error: false,
}

const addTodoStart = (state, action) => {
  return state;
}

const addTodoSuccess = (state, action) => {
  const newTodo = {
    id: action.payload.todoId,
    ...action.payload.todo,
  }
  return update(state, {todos: {$push: [newTodo]}});
}

const addTodoFail = (state, action) => {
  return state;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_START: return addTodoStart(state, action);
    case actionTypes.ADD_TODO_SUCCESS: return addTodoSuccess(state, action);
    case actionTypes.ADD_TODO_FAIL: return addTodoFail(state, action);
    default: return state;
  }
}

export default reducer;
