import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import * as actions from './state/index';
import TodoRoot from './components/index';
export { default as reducer } from './state/index';

export const MODULE_NAME = 'todos';
export const decorator = connect(
  state => ({
    todos: get(state, MODULE_NAME)
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
);

export default decorator(TodoRoot);
