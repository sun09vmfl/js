import axios from 'axios';
import { useEffect, useState } from 'react';

function Async5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=b49b91d397a5433cb2e3f1a8873f775b`;
    axios.get(url).then(res => setData(res.data.articles));
  }, []);

  return (
    <>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank">
              <img src={item.urlToImage} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Async5;
