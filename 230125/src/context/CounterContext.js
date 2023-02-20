import { createContext, useState } from 'react';

// 1. 관리자 만들기(전역 데이터 저장공간)
export const CounterContext = createContext();

// 2. ui 디자인 가져오기(컴포넌트)
const CounterProvider = props => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  //저장소(관리자) 갖고 오기 children 쓰면 값을 다 물려받음
  // 3. 관리자에ㅓ 공급을 자식에게로 값 전달.
  return <CounterContext.Provider value={{ count, increment, decrement }}>{props.children}</CounterContext.Provider>;
};

export default CounterProvider;
