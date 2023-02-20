import { Link, Routes, Route } from 'react-router-dom';
import About from './page2/About';
import Home from './page2/Home';
import NotFoundPage from './page2/NotFoundPage';
import Product from './page2/Product';
import Service from './page2/Service';

const data = [
  { id: 1, title: '딸기', info: '겨울 제철 과일입니다.' },
  { id: 2, title: '고구마', info: '겨울 간식입니다.' },
  { id: 3, title: '붕어빵', info: '겨울 간식입니다.' },
  { id: 4, title: '팥붕어빵', info: '근본입니다.' },
  { id: 5, title: '커피', info: '커피는 카페인이지.' },
];

function App2() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Link to="/about/딸기">딸기</Link>
        </li>
        <li>
          <Link to="/about/고구마">고구마</Link>
        </li>
        <li>
          <Link to="/about/붕어빵">붕어빵</Link>
        </li>
        <li>
          <Link to="/about/팥붕어빵">팥붕어빵</Link>
        </li>
        <li>
          <Link to="/about/커피">커피</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about/:id " element={<About data={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App2;
