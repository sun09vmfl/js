import styled, { css } from 'styled-components';

// ${ props => props.props명 }
const Container = styled.div`
  width: ${props => props.wt};
  border: 1px solid #000;
  margin: 10px auto;
  background-color: ${props => (props.bg ? props.bg : 'orange')};
`;
const Box = styled.button`
  background-color: ${props => props.bgcolor ? '#764'};
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${props => (props.width ? props.width : '100px')}
    ${props =>
      props.primary &&
      css`
        background-color: #000;
        width: 80%;
        transition: 0.3s;
        display: block;
        &:hover {
          background-color: maroon;
          color: #fff;
        }
      `};

function StyledCom2() {
  return (
    // 사용자 정의 props이름 -> wt, bg
    <Container wt="70vw">
      <Box width="120px" bgcolor="salmon">
        box1
      </Box>
      <Box>box2</Box>
      <Box>box3</Box>
      <Box>box4</Box>
      <Box primary>box5</Box>
    </Container>
  );
}

export default StyledCom2;
