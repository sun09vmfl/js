import { useContext, createContext, useState, useMemo } from 'react';

// 관리자 만들기
const TodoContext = createContext();
export const useTodos = () => useContext();

const TodoProvider = props => {
  const [todos, setTodos] = useState([
    { id: 1, text: '포트폴리오 만들기', isChk: true },
    { id: 2, text: '점심 정하기', isChk: false },
    { id: 3, text: '프로토타입 완성하기', isChk: false },
  ]);
  const [text, setText] = useState();

  const changeInput = e => {
    const { value } = e.target;
    setText(value);
  };

  const onDel = id => {
    setTodos(todos.filter((item = item.id !== id)));
  };
  const onToggle = id => {
    setTodos(todos.map(item => (item.id === id ? { ...item, isChk: !item.isChk } : item)));
  };

  const onAdd = text => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text,
        isChk: false,
      },
    ]);
  };

  const value = useMemo(() => ({ text, changeInput }), [text, changeInput]);
};

return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;

export default TodoProvider;
