import { useEffect, useState } from 'react';

function UseEffect3Sub() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function onMove(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log('실행');
    window.addEventListener('mousemove', onMove);

    // 살아 있는 이벤트를 제거하고 다시 실행할 수 있게
    return () => {
      console.log('clean-up');
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div>
      <h1>UseEffect3</h1>
      <h2>마우스 좌표</h2>
      <div style={{ border: '1px solid #000', width: 300, padding: 20, margin: 5, fontSize: 30 }}>
        x축:{x} / y축:{y}
      </div>
    </div>
  );
}

export default UseEffect3Sub;
