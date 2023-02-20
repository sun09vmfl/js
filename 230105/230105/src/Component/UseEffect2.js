import { useEffect, useRef, useState } from 'react';

function UseEffect2(props) {
  const [txt, setTxt] = useState('');
  const txtRef = useRef();

  useEffect(() => {
    console.log('실행');
    txtRef.current.focus();
  }, []); // 딱 한 번만 실행

  return (
    <div>
      <h1 style={{ margin: 0 }}>UseEffect2</h1>
      <input style={{ margin: 0, padding: 10 }} type="text" value={txt} onChange={e => setTxt(e.target.value)} ref={txtRef} />
    </div>
  );
}

export default UseEffect2;
