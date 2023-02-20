import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => (props.size ? props.size : '70vw')};
  /* height: 300px; */
  border: 2px solid #000;
  padding: 50px;
  margin: 30px auto;
  overflow: hidden;
  h2 {
    font-family: '나눔고딕', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
  }
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  border: none;
  cursor: pointer;
  margin: 10px 5px 0;
  float: left;
  padding: 20px;
  font-size: 35px;
  &:hover {
    background-color: orange;
  }
  &.plus::after {
    content: '👍';
  }
  &.minus::after {
    content: '👎';
  }
`;

function EX1Styled() {
  let [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    setCount(count >= max ? max : count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      {/* 카운터 1씩 증가, 1씩 감소 */}
      <h2>count: {count}</h2>
      <Button className="plus" onClick={increment} disabled={count === max}></Button>
      <Button className="minus" onClick={decrement} disabled={count === min}></Button>
    </Container>
  );
}

export default EX1Styled;
