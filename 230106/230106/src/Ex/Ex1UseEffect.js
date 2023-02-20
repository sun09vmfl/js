import React, { useState } from 'react';
import Ex1Sub from './Ex1Sub';

function Ex1useEffect() {
  const [isShow, setIsShow] = useState(false);

  function onToggle() {
    setIsShow(!isShow);
  }
  return (
    <div>
      <button onClick={onToggle}>{isShow ? '숨김' : '보임'}</button>
      <div>
        {/* 현재 날짜, 시간이 1초마다 업데이트 */}
        {isShow && <Ex1Sub />}
      </div>
    </div>
  );
}

export default Ex1useEffect;
