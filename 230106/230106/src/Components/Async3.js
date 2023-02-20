import axios from 'axios';
import { useEffect, useState } from 'react';

function Async3() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        //응답 성공
        setData(res.data);
        setLoading(false);
        setError('');
      })

      .catch(error => {
        //응답 실패
        setData([]);
        setLoading(false);
        setError('주소를 찾을 수 없습니다.');
      });
  }, []);

  return (
    <>
      {data && loading ? (
        <h2>로딩 중...</h2>
      ) : (
        <ol>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
      <h3 style={{ color: 'red' }}>{error}</h3>
    </>
  );
}

export default Async3;
