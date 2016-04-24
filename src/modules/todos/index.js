import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import * as actions from './state/index';
import TodoApp from './components/todo-app';
import { name as MODULE_NAME } from './package.json';
export { default as reducer } from './state';

export { MODULE_NAME };
export const decorator = connect(
  state => ({
    todos: get(state, MODULE_NAME)
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
);

export default decorator(TodoApp);
