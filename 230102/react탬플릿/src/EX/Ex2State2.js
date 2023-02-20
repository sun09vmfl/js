import React, { useState } from 'react';

function Ex2State2(props) {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState('이곳에 입력해 주세요.');

  function itmeList(event) {
    let val = event.target.value;
    //console.log(val);
    setTxt(val);
  }

  function addItem() {
    // txt === '' && alert(`ddd`);
    if (txt === '') {
      alert('짜샤 내용이 비어있잖냐~!!!!!!!!!!!!');
      return;
    }

    setData(prevItem => {
      let idx = prevItem.length;
      return [...prevItem, { id: idx++, name: txt }];
    });

    setTxt(''); //빈 텍스트 필드
  }

  return (
    <>
      {/* onChange 변경될 때마다 인식 */}
      <input type="text" value={txt} onChange={itmeList} />
      <button onClick={addItem}>추가</button>
      <hr />
      <ul>
        {data.map(data => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
      {/* 입력 내용을 리스트로 출력 */}
    </>
  );
}

export default Ex2State2;
