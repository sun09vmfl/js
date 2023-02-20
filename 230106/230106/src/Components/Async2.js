import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Async2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img src={item.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Async2;
