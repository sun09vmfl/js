import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Counter() {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h2>카운터 : {count}</h2>
      <button onClick={() => increment()}>증가</button>
      <button onClick={() => decrement()}>감소</button>
    </div>
  );
}

export default Counter;
