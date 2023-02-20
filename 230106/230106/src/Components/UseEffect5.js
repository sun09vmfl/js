import React, { useEffect, useState } from 'react';

function UseEffect5(props) {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(3);

  const onChangeInput = e => {
    const { value } = e.target;
    setTxt(value);
  };

  useEffect(() => {
    console.log('실행');
    const timer = setInterval(() => {
      setCount(con => con + txt);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [txt]);
  return (
    <>
      <h1>입력한 값만큼 1초마다 증가</h1>
      <p>
        숫자 간격: <input type="text" value={txt} onChange={onChangeInput} />
      </p>
      <h2>{count}</h2>
    </>
  );
}

export default UseEffect5;
