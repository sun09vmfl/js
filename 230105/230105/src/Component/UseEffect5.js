import React, { useEffect, useState } from 'react';

function UseEffect5(props) {
  const [count, setCount] = useState(1);
  const [txt, setTxt] = useState(5);

  const onChangeInput = e => {
    const { value } = e.target;
    setTxt(value);
  };

  useEffect(() => {
    console.log('실행');
    const timer = setInterval(() => {
      setCount(con => con + txt);
    }, 1000);
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
