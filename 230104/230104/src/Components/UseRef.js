import React, { useState, useRef } from 'react';
/*
 useRef();
 특정 값을 저장하기 위해 사용.
 특정 값이 변경되어도 렌더링이 일어나지 않음.즉 렌더링을 하고 싶지 않을 때 사용.
 .current 안에 값을 저장하기 때문에 값 보전

*/

function UseRef() {
  let [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(`랜더링 +1`);

  const increment = () => {
    setCount(count + 1);
  };

  function increaseRef() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <>
      <p>State: {count}</p>
      <p>State: {countRef.current}</p>
      <button onClick={increment}>UseState</button>
      <button onClick={increaseRef}>UseRef</button>
    </>
  );
}

export default UseRef;
