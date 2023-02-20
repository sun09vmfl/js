import React, { useContext, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todos(props) {
  const { color } = useContext(Color);
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todos;
