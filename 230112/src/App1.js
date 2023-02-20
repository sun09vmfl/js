import { Routes, Route } from 'react-router-dom';
import About from './Page1/About';
import Home from './Page1/Home';
import Nav from './Page1/Nav';
import NotFoundPage from './Page1/NotFoundPage';
import Product from './Page1/Product';
import Service from './Page1/Service';

function App1() {
  return (
    <>
      <Nav />

      {/* {화면에 보이는 영역 설정} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service/ " element={<Service />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App1;
