import React from 'react';

function TodoList() {
  const {Todos} = useTodos(); 
  return (
    <ul>
      {Todos.map(item) => (
        <todoItem key ={item.id} item={item} />
      )}
    </ul>
  );
}

export default TodoList;
