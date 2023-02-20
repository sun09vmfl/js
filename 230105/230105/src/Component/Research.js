import { useState } from 'react';
import styled from 'styled-components';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const Wrapper = styled.div`
  max-width: 600px;
  min-width: 70vw;
  border: 3px solid #000;
  padding: 20px;
  margin: 20px auto;
  font-weight: bold;
  font-family: '맑은고딕', sans-serif;
`;

//최상위 컴포넌트
function Research() {
  const [data, setData] = useState({
    userName: '',
    age: '',
    addr: '',
    tel: '',
    job: '',
    email: '',
    hobby: '',
    inter: '',
    gender: '',
  });
  const { userName, age, addr, tel, job, email, inter, gender } = data;

  const [page, setPage] = useState(1);

  //글자 변경
  const changeInput = e => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  //다음 페이지 이동
  const onNext = () => {
    setPage(page + 1);
  };

  //이전 페이지 이동
  const onPrev = () => {
    setPage(page - 1);
  };
  return (
    <Wrapper>
      {page === 1 && <Page1 data={data} changeInput={changeInput} onNext={onNext} />}
      {page === 2 && <Page2 data={data} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />}
      {page === 3 && <Page3 {...data} onPrev={onPrev} onNext={onNext} />}
      {page === 4 && <Page4 userName={userName} />}
    </Wrapper>
  );
}

export default Research;
