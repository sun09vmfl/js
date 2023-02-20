import styled from 'styled-components';

/*
    styled-components

    const 컴포넌트명 = styled.태그명`
      css 스타일
    `

    const 컴포넌트명 = styled('태그')`
      css 스타일
    `
*/

const Container = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 50px auto;
  width: 50vw;
`;
const Box1 = styled.article`
  background-color: orange;
  width: 80%;
  padding: 20px;
  &:hover {
    transition: 0.5s;
    background-color: salmon;
  }
`;
const Box2 = styled('section')`
  border: 1px solid lightcoral;
  padding: 20px;
  font-weight: bold;
  margin: 20px;
`;
const Box3 = styled('button')`
  border: none;
  background-color: darkblue;
  border-radius: 30px;
  color: #fff;
  padding: 30px;
  &:hover {
    background-color: #ddd;
    transition: 0.2s;
  }
`;

function StyledCom1() {
  return (
    <Container>
      <Box1>첫번째 박스</Box1>
      <Box2>두번째 박스</Box2>
      <Box3>세번째 박스</Box3>
    </Container>
  );
}

export default StyledCom1;
