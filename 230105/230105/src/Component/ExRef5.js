import React, { useState, useRef } from 'react';

function Ex5Ref() {
  const idRef = useRef();

  // const [ userId, setUserId] = useState("");
  // const [ userPw, setUserPw] = useState("");
  // const [ userEmail, setUserEmail ] = useState("");

  const [form, setForm] = useState({
    userId: '',
    userPw: '',
    userEmail: '',
  });
  const { userId, userPw, userEmail } = form;

  const changeInput = e => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onReset = () => {
    setForm({
      userId: '',
      userPw: '',
      userEmail: '',
    });
    idRef.current.focus();
  };

  return (
    <>
      {/* 취소 후 커서 id에 */}
      id : <input type="text" value={userId} name="userId" onChange={changeInput} ref={idRef} />
      <br />
      pw : <input type="password" value={userPw} name="userPw" onChange={changeInput} />
      <br />
      email : <input type="email" value={userEmail} name="userEmail" onChange={changeInput} />
      <br />
      <button onClick={onReset}>취소</button>
      <hr />
      <h3>
        id: {userId} / pw: {userPw} / email: {userEmail}
      </h3>
    </>
  );
}

export default Ex5Ref;
