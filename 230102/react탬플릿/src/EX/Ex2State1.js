import React, { useState } from 'react';

const style = {
  border: '1px solid #000',
  backgroundColor: '#fff',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: 30,
};
const colors = [
  { no: 1, bg: 'tomato' },
  { no: 2, bg: 'orange' },
  { no: 3, bg: 'salmon' },
  { no: 4, bg: 'lightskyblue' },
];

function Ex2State1() {
  // 구조분해할당으로 반환되는 첫번째 값 state, 두번째 값 setState(state변경 함수)
  const [data, setData] = useState('click1');
  const [arr, setArr] = useState(colors);

  // 컬러 배열에 객체 추가
  const addColor = () => {
    const newItem = [...arr];
    newItem[4] = { no: 5, bg: 'maroon' };
    console.log(newItem);
    setArr(newItem);
  };

  return (
    <div>
      <button style={style} onClick={() => (data === 'click2' ? setData('click1') : setData('click2'))}>
        {data}
      </button>
      <hr />

      {/* 버튼을 클릭하면 제일 마지막 줄에 색상 추가 */}
      <button style={style} onClick={addColor}>
        maroon 색상 추가
      </button>
      <ul style={{ fontWeight: 'bold', fontSize: 40, lineHeight: 1.6 }}>
        {arr.map(color => {
          const { no, bg } = color;
          return (
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ex2State1;
