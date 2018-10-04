import * as actionTypes from './actionTypes';

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

export const addTodo = (id, text, status) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id,
    text,
    status,
  }
})

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: {
    id,
  }
})

export const changeTodoStatus = (id) => ({
  type: actionTypes.CHANGE_TODO_STATUS,
  payload: {
    id,
  }
})

export const completeAllTodo = () => ({
  type: actionTypes.COMPLETED_ALL_TODO,
})

export const uncompleteAllTodo = () => ({
  type: actionTypes.UNCOMPLETED_ALL_TODO,
})

export const changeTodoFilter = (filterType) => ({
  type: actionTypes.CHANGE_TODO_FILTER,
  payload: {
    filterType,
  }
})

export const saveTodos = (uid, token, todos) => ({
  type: actionTypes.SAVE_TODOS,
  payload: {
    uid,
    token,
    todos,
  }
})

export const saveTodosStart = () => ({
  type: actionTypes.SAVE_TODOS_START,
})

export const saveTodosSuccess = () => ({
  type: actionTypes.SAVE_TODOS_SUCCESS,
})

export const saveTodosFail = () => ({
  type: actionTypes.SAVE_TODOS_FAIL,
})
export const updateTodosIdToUser = (uid, token, todosId) => ({
  type: actionTypes.UPDATE_TODOS_ID_TO_USER,
  payload: {
    uid,
    token,
    todosId,
  }
})





