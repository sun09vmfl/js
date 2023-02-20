import React, { useRef } from 'react';

function Ex4Ref() {
  //생성
  const color = useRef();

  //사용
  const onChk = () => {
    const data = {
      selectColor: color.current.value,
    };
    console.log(color.current.value);
  };
  return (
    <>
      {/* 선택된 컬러 콘솔 출력 */}
      <select ref={color}>
        <option value="orange">orange</option>
        <option value="tomato">tomato</option>
        <option value="salmon">salmon</option>
        <option value="teal">teal</option>
      </select>
      <button onClick={onChk}>확인</button>
    </>
  );
}

export default Ex4Ref;
