import React from 'react';
import { withState, compose, mapProps } from 'recompose';

export const TodoInput = ({ text = '', onChange, onSubmit }) => (
  <div>
    <input type='text' onChange={onChange} value={text}/>
    <button onClick={onSubmit}>Add</button>
  </div>
)

export const decorator = compose(
  withState('text', 'setText'),
  mapProps(({ setText, addTodo, text, ...rest }) => ({
    onChange: e => setText(e.target.value),
    onSubmit: () => addTodo(text),
    text,
    ...rest
  }))
);

export default decorator(TodoInput);
