import React, { useRef, useState } from 'react';

function UseRef3() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  //가상돔을 참조할 빈 객체로 생성
  const idRef = useRef(null);

  function getId(event) {
    setUserId(event.target.value);
  }
  function getPw(evt) {
    const { value } = evt.target;
    setUserPw(value);
  }
  function onReset() {
    setUserId('');
    setUserPw('');

    //랜더링이 되더라도 값을 기억하기 때문에 초기화시켜서 깜빡임
    idRef.current.focus();
  }

  return (
    <>
      <label>ID: </label>
      <input type="text" value={userId} onChange={getId} ref={idRef} />
      <br />
      <label>PW: </label>
      <input type="password" value={userPw} onChange={getPw} />
      <br />
      <button onClick={onReset}>reset</button>
      <hr />
      <h3>id: {userId}</h3>
      <h3>pw: {userPw}</h3>
    </>
  );
}

export default UseRef3;
