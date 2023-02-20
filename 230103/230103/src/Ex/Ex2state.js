import React, { useState } from 'react';

function Ex2state() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = e => {
    const { checked } = e.target;
    setIsChk(checked);
  };
  return (
    <div>
      <p>
        <input type="checkbox" onChange={onCheck} checked={isChk} />
        {isChk ? `보임` : `숨김`}
      </p>
      <hr />
      {/* {isChk ? <div style={{width:200, height:100, backgroundColor:'tomato'}}></div> : null;} */}
      {isChk && <div style={{ width: 200, height: 100, backgroundColor: 'tomato' }}></div>}
    </div>
  );
}

export default Ex2state;
