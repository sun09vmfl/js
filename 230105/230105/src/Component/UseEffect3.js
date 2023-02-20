import React, { useState } from 'react';
import UseEffect3Sub from './UseEffect3Sub';

function UseEffect3() {
  const [isShow, setIsShow] = useState(false);

  function onToggle() {
    setIsShow(!isShow);
  }
  return (
    <div>
      <button onClick={onToggle}>{isShow ? '숨김' : '보임'}</button>
      {isShow && <UseEffect3Sub />}
    </div>
  );
}

export default UseEffect3;
