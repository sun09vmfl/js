import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 1px solid #000;
  width: 70vw;
  margin: 10px 0;
  padding: 20px;
  h4 {
    margin: 6px 0;
  }
`;
function Member({ item }) {
  const { id, name, phone } = item;
  const naviagte = useNavigate();

  const onGo = () => {
    naviagte(`/member/${id}`);
  };
  return (
    <Container>
      <p>ID : {id}</p>
      <h4>이름 : {name}</h4>
      <p>연락처 : {phone}</p>
      {/* <p>
        <Link to={`/member/${id}`}>더보기 &gt;</Link>
      </p> */}
      <button onClick={onGo}>{id}번 더보기</button>
    </Container>
  );
}

export default Member;
