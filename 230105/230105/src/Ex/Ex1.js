import React, { useState, useRef } from 'react';

function Ex1() {
  //key값
  const idRef = useRef(1);
  //커서 깜빡임
  const focusRef = useRef();

  //추가된 내용들
  const [data, setData] = useState([]);

  // 각 내용들 구성 : {id:idRef, text: txt}로 처리
  const [txt, setTxt] = useState('');

  const changeInput = e => {
    setTxt(e.target.value);
  };
  const onAdd = () => {
    setData([
      ...data,
      {
        id: idRef.current++,
        txt,
      },
    ]);
    setTxt('');
    focusRef.current.focus();

    //id: idRef.current++
  };

  return (
    <div style={{ padding: 30 }}>
      <input type="text" value={txt} onChange={changeInput} ref={focusRef} />
      <button onClick={onAdd}>추가</button>
      <hr />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} : {item.txt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex1;
