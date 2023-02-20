import { useTodos } from '../context/TodoContext';
function TodoInput() {
  const { text, changeInput } = useTodos();
  const onSubmit = e => {
    e.preventDefalut();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
