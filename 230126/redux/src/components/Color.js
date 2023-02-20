import { useDispatch, useSelector } from "react-redux";
// 리듀서 파일
import { orange, tomato, skyblue } from "../store/colorReducer";

function Color() {
  // 상태 처리
  const stateColor = useSelector((state) => state.colorA.color);
  // 액션 처리
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ color: stateColor }}>color:{stateColor}</h2>
      <button onClick={() => dispatch(orange())}>orange</button>
      <button onClick={() => dispatch(tomato())}>tomato</button>
      <button onClick={() => dispatch(skyblue())}>skyblue </button>
    </div>
  );
}

export default Color;
