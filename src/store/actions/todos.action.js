import * as actionTypes from './actionTypes';

export const addTodo = (token, uid, text, index, status = false) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    token,
    uid,
    text,
    status,
    index,
  }
})

export const addTodoStart = () => ({
  type: actionTypes.ADD_TODO_START,
})

export const addTodoSuccess = (todoId, todo) => ({
  type: actionTypes.ADD_TODO_SUCCESS,
  payload: {
    todoId,
    todo,
  }
})

export const addTodoFail = (error) => ({
  type: actionTypes.ADD_TODO_FAIL,
  payload: {
    error,
  }
})

export const fetchTodo = (token, uid) => ({
  type: actionTypes.FETCH_TODO,
  payload: {
    token,
    uid,
  }
})

export const fetchTodoStart = () => ({
  type: actionTypes.FETCH_TODO_START,
})

export const fetchTodoSuccess = (todos) => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
  payload: {
    todos,
  }
})

export const fetchTodoFail = (error) => ({
  type: actionTypes.FETCH_TODO_FAIL,
  payload: {
    error,
  }
})



export const removeTodo = (todoId) => ({
  type: actionTypes.REMOVE_TODO,
  payload: todoId,
})
