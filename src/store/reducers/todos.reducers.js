import * as actionTypes from './../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  todos: [],
  filter: 'ALL',
  loading: false,
  error: false,
}

const addTodo = (state, action) => {
  return update(state, {todos: {$push: [action.payload]}});
}

const removeTodo = (state, action) => {
  const newTodos = state.todos.filter(todo => todo.id !== action.payload.id);
  return update(state, {todos: {$set: newTodos}});
}

const changeTodoStatus = (state, action) => {
  const arrIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
  return update(state, {todos: {[arrIndex]: {$toggle: ['status']}}})
}

const completeAllTodo = (state, action) => {
  const newTodos = state.todos.map(todo => (update(todo, {status: {$set: true}})));
  return update(state, {todos: {$set: newTodos}});
}

const uncompleteAllTodo = (state, action) => {
  const newTodos = state.todos.map(todo => (
    update(todo, {
      status: {$set: false}
    })
  ));
  return update(state, {
    todos: {$set: newTodos}
  });
}

const changeTodoFilter = (state, action) => {
  return update(state, {
    filter: {$set: action.payload.filterType}
  });
}

const fetchTodoStart = (state, action) => {
  return update(state, {
    loading: {$set: true}
  })
}


const fetchTodoSuccess = (state, action) => {
  return update(state, {
    todos: {$set: action.payload.todos ? action.payload.todos : []},
    loading: {$set: false}
    })
}

const fetchTodoFail = (state, action) => {
  return update(state, {
    loading: {$set: false},
  });
}

const saveTodosStart = (state, action) => {
  return update(state, {
    loading: {$set: true},
  })
}

const saveTodosSuccess = (state, action) => {
  return update(state, {
    loading: {$set: false}
  })
}

const saveTodosFail = (state, action) => {
  return update(state, {
    loading: {$set: false}
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: return addTodo(state, action);
    case actionTypes.REMOVE_TODO: return removeTodo(state, action);
    case actionTypes.CHANGE_TODO_STATUS: return changeTodoStatus(state, action);
    case actionTypes.COMPLETED_ALL_TODO: return completeAllTodo(state, action);
    case actionTypes.UNCOMPLETED_ALL_TODO: return uncompleteAllTodo(state, action);
    case actionTypes.CHANGE_TODO_FILTER: return changeTodoFilter(state, action);
    case actionTypes.FETCH_TODO_START: return fetchTodoStart(state, action);
    case actionTypes.FETCH_TODO_SUCCESS: return fetchTodoSuccess(state, action);
    case actionTypes.FETCH_TODO_FAIL: return fetchTodoFail(state, action);
    case actionTypes.SAVE_TODOS_START: return saveTodosStart(state, action);
    case actionTypes.SAVE_TODOS_SUCCESS: return saveTodosSuccess(state, action);
    case actionTypes.SAVE_TODOS_FAIL: return saveTodosFail(state, action);
    default: return state;
  }
}

export default reducer;
