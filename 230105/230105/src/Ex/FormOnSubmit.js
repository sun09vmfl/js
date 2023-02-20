import React, { useRef, useState } from 'react';

function FormOnSubmit() {
  const idRef = useRef(1);
  const focusRef = useRef();

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  const { name, email } = form;

  const changeInput = e => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onAdd = e => {
    //form 고유 성격(전송 뒤 새로고침) 제거 한 거임.
    e.preventDefault();

    // if (name.length === 0 || email.length) {
    //   console.log('내용 없음')
    //   return
    // }

    if (!name || !email) {
      console.log('내용없음');
      return;
    }
    setData([
      ...data,
      {
        id: idRef.current++,
        name,
        email,
      },
    ]);

    focusRef.current.focus();
  };

  return (
    <div style={{ margin: 30 }}>
      {/* <buttom onClick={onAdd} 보다 <form onSubmit={onAdd}>사용이 일반적인 방법 */}
      <form onSubmit={onAdd}>
        <input type="text" value={name} name="name" onChange={changeInput} /> <br />
        <input type="text" value={email} name="email" onChange={changeInput} /> <br />
        <button type="submit">추가</button>
      </form>
      <hr />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} : {item.name} / {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormOnSubmit;
