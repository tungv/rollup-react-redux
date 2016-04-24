import 'react-hot-loader/patch'
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';

import TodoApp, { MODULE_NAME as TODOS_MODULE_NAME, reducer as TodoReducer } from './modules/todos';

export const store = createStore(combineReducers({
  [TODOS_MODULE_NAME]: TodoReducer
}));

const render = (component) =>
  ReactDOM.render(<AppContainer component={component} props={{ store }} />, document.getElementById('root'));

export const initialize = () => render(TodoApp);
