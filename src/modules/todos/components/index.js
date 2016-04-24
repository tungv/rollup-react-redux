import React from 'react';
import TodoItem from './todo-item';
import TodoInput from './todo-input';

export const TodoRoot = ({ todos, actions: { addTodo } }) => (
  <div>
    <TodoInput addTodo={addTodo} />
    { todos.map((todo, index) => <TodoItem key={index} {...todo}/>)}
  </div>
);

export default TodoRoot;
