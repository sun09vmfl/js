import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Ex3Async() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(url).then(res => setPost(res.data));
  }, [num]);

  const onNum = () => {
    setNum(id);
  };
  return (
    <>
      {/* 검색창에 아이디 값을 입력하면 해당 아이디를 가진 title 출력 */}
      <p>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={onNum}>검색</button>
      </p>
      <hr />
      <h3>
        {post.id} : {post.title}
      </h3>
    </>
  );
}

export default Ex3Async;
