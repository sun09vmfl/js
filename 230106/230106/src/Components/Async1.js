import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Async1() {
  const [data, setData] = useState([]);
  /*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  */

  //axios.get(url);
  /*
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setData(res.data));
  }, []); 
  */

  /*
  useEffect(() => {
    //함수 정의
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
*/

  useEffect(() => {
    // 함수 정의
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            {item.body.substr(0, 50)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Async1;
