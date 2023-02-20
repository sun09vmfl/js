import styled, { keyframes } from 'styled-components';
import { Reset } from 'styled-reset';

const Container = styled.div`
  height: 100vh;
  background-color: salmon;
  display: grid;
  place-items: center;
`;

//사전 설정 필요. 실행 컴포넌트 앞에 작성
const mov = keyframes`
  0%, 100% {transform:translateY(0px) }
  25% {transform:translateY(-20px) rotate(20deg)}
  50% {transform:translateY(10px)}
  75% {transform:translateY(-20px) rotate(-20deg)}
`;

const Rabbit = styled.div`
  font-size: 7em;
  animation: 3s infinite ease-in-out ${mov};
`;

function StyledAnimation() {
  return (
    <Container>
      <Rabbit>🦝</Rabbit>
    </Container>
  );
}

export default StyledAnimation;
