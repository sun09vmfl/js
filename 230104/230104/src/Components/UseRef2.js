import React, { useRef } from 'react';

function UseRef2() {
  const ref1 = useRef(null);
  const ref2 = useRef();

  const onColor = () => {
    //사용
    ref1.current.style.backgroundColor = 'orange';
    ref1.current.style.padding = '20px';
    ref1.current.style.color = 'teal';

    ref2.current.style.backgroundColor = 'tomato';
  };
  return (
    <>
      {/* DOM연결 ref={} */}
      <p ref={ref1}>useRef 연습</p>
      <p ref={ref2}>useRef 연습</p>
      <button onClick={onColor}>확인</button>
    </>
  );
}

export default UseRef2;
