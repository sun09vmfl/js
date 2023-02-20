import React, { useState, useRef } from 'react';

function UseRef5() {
  const [UserId, setUserId] = useState('');
  const [UserPw, setUserPw] = useState('');

  const idRef = useRef(null);
  function changeInput(event) {
    changeInput(isEmail);
  }
  return (
    <>
      id : <input type="text" value name="id" onChange={changeInput} />
      <br />
      pw : <input type="password" name="pw" onChange={changeInput} />
      <br />
      email : <input type="text" name="email" onChange={changeInput} />
      <button>취소</button>
      <hr />
      <h3>
        id: {userId} / pw: {userPw} / email: {userEmail}
      </h3>
    </>
  );
}

export default UseRef5;
