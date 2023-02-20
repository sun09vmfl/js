import React, { useState } from 'react';

function Ex2State() {
  const [color, setColor] = useState('transparent');
  const [txt, setTxt] = useState('');

  const getColor = e => {
    //내가 클릭한 대상의 value 가져옴
    const { value } = e.target;
    console.log(value);
    setTxt(value);
  };

  const changeBg = () => {
    setColor(txt);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h1>컬러선택</h1>
      <select onChange={getColor}>
        <option value="orange">orange</option>
        <option value="maroon">maroon</option>
        <option value="tomato">tomato</option>
        <option value="teal">teal</option>
        <option value="lightskyblue">lightskyblue</option>
      </select>
      <button onClick={changeBg}>변경</button>
    </div>
  );
}

export default Ex2State;
