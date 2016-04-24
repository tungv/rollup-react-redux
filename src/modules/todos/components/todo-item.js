import React from 'react';

export const TodoItem = ({ text, done, ...rest }) => (
  <div {...rest}>
    <input type='checkbox' readOnly checked={done}/>
    <span>{ text }</span>
  </div>
);

export default TodoItem;
