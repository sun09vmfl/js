import styled from 'styled-components';
import { useRef, useState } from 'react';

const Container = styled.div`
  margin: 30px;
  border: 1px solid #000;
  width: ${props => (props.width ? props.width : '80vw')};
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  background-color: #fff;
  padding: 4px 10px;
  margin: 10px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

function UseRef1() {
  const idNum = useRef(1);
  const [data, setData] = useState([]);

  // 문자열을 배열로 반환
  const coffee = '편의점, 김밥천국, 고봉민김밥, 서브웨이, 마라탕, 국밥, 햄버거, 피자, 역전우동, 파스타'.split(',');

  function onPrint() {
    const ran = Math.trunc(Math.random() * coffee.length);
    setData([
      ...data,
      {
        id: idNum.current++,
        name: coffee[ran],
      },
    ]);
    // id: idNum.current++;
  }
  return (
    <Container>
      <Button onClick={onPrint}>오늘 점심 뭐 먹지?</Button>
      <hr />
      <ul>
        {data.map((item, idx) => (
          <li key={item.id}>
            {item.id} : {item.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default UseRef1;
