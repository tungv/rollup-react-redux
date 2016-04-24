import { createAction, handleActions } from 'redux-actions';
import { name } from '../package.json';
const ADD_TODO = `${ name }/ADD_TODO`;

export type Todo = {
  text: string,
  done: boolean
};

const initialState = [
  { text: 'Item 1', done: true },
  { text: 'Item 2', done: false },
  { text: 'Item 3', done: false },
]

export const addTodo = createAction(ADD_TODO, text => ({
  text,
  done: false,
}));

const handlers = {
  [ADD_TODO]: (state: Todo[], { payload }) => [...state, payload]
};

export default handleActions(handlers, initialState);
