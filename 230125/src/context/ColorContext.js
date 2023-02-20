import { createContext, useMemo, useState } from 'react';

// 1. 전체 관리자
export const ColorContext = createContext();

// 2. ui 컴포넌트 설정 (함수, 상태./..)
const ColorProvider = props => {
  const [color, setColor] = useState('#ddd');

  const onOrange = props => {
    setColor('orange');
  };
  const onTomato = () => {
    setColor('tomato');
  };
  const onSkyblue = () => {
    setColor('skyblue');
  };
  const onTeal = () => {
    setColor('teal');
  };
  const value = useMemo(() => ({ color, onOrange, onTomato, onTeal, onSkyblue }), [color, onOrange, onTomato, onTeal, onSkyblue]);

  // 3. 관리자에ㅓ 공급을 자식에게로 값 전달.
  return <ColorContext.Provider value={value}>{props.children}</ColorContext.Provider>;
};
// https://ko.reactjs.org/docs/hooks-reference.html#usememo

/* useMemo(()=> (),[]);
r같은 값을 대입시 나오는 값이 동일한 경우 useMemo로 저장한 뒤 동일한 입력에 대응하는 방식
Context Provider에 전달하는 경우 주로 사용

const value = useMemo();
*/
export default ColorProvider;
