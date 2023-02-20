import React, { useEffect, useState } from 'react';

function UseEffect4() {
  const [count, setCount] = useState(0);

  //화면에 그려진 후 한 번만 실행
  useEffect(() => {
    console.log('실행');
    const timer = setInterval(() => {
      console.log('setInterval');
      setCount(con => con + 1);
    }, 1000);

    // setInterval 제거 후 다시 실행. 이 값이 없으면 속도가 아주 지랄맞아짐
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>count: {count}</h1>
      <p>1초마다 1씩 증가</p>
    </>
  );
}

export default UseEffect4;
