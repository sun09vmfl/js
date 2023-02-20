import React from 'react';

function TodoItem(props) {
  const { id, text, isChk } = item;
  return (
    <li style={{ color: isChk ? 'tomato' : '#000' }}>
      <input type="checkbox" checked={isChk} onChange={() => ontoggle(id)} />
      {text}
      <button onClick={() => ondragleave(id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
