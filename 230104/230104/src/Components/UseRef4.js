import { useState, useRef } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  margin: 50px auto;
  transition: 0.5s;
  text-align: center;
`;

function UseRef4() {
  let [num, setNum] = useState('0');
  //가상돔을 참조할 빈 객체 생성
  const boxRef = useRef(null);

  function prevRotate() {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }
  function nextRotate() {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }

  return (
    <>
      <button onClick={prevRotate}>&lt;-</button>
      <button onClick={nextRotate}>-&gt;</button>
      <Box ref={boxRef}>box</Box>
    </>
  );
}

export default UseRef4;
