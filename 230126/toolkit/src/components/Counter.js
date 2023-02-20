import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/counter";

function Counter() {
  const count = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>카운트: {count}</h2>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
    </div>
  );
}

export default Counter;
