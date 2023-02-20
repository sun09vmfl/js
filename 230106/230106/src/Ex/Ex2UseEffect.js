import React, { useEffect, useState } from 'react';

function Ex2useEffect() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let timer = null;

    if (isActive) {
      timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      console.log('clean-up');
      clearInterval(timer);
    };
  }, [isActive]);

  const onReset = () => {
    setCount(0);
    setIsActive(false);
  };
  return (
    <>
      {/* 1초마다 카운트 */}
      <h1>count: {count}</h1>
      <button onClick={onToggle}>{isActive ? '멈춤' : '시작'}</button>
      <button onClick={onReset} style={{ marginLeft: 10 }}>
        정지 및 초기화
      </button>
    </>
  );
}

export default Ex2useEffect;
