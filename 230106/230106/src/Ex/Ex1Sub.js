import { useEffect, useState } from 'react';

function Ex1Sub() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log('시작');
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      // 자식 컴포넌트에서 처리할 경우 clean-up 필요
      console.log('clean-up');
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>날짜: {now.toLocaleDateString()}</p>
      <p>시간: {now.toLocaleTimeString()}</p>
    </>
  );
}

export default Ex1Sub;
