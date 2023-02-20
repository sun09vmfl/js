import React, { useState } from 'react';

function Ex1state() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = e => {
    const { checked } = e.target;
    setIsChk(checked);
  };
  return (
    <div>
      <h2 style={{ marginLeft: '50px' }}>오늘 할 일</h2>
      <p style={{ fontWeight: `bold`, marginLeft: `50px`, color: isChk ? `tomato` : `green`, textDecoration: isChk ? 'line-through' : 'none' }}>
        <input type="checkbox" onChange={onCheck} checked={isChk} />
        리액트 공부하기
      </p>
    </div>
  );
}

export default Ex1state;
