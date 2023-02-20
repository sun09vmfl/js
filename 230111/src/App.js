import { Route, Routes } from 'react-router-dom';
import About from './Layout/About';
import Board from './Layout/Board';
import Home from './Layout/Home';
import Main from './Layout/Main';
import NotFoundPage from './Layout/NotFoundPage';
import Product from './Layout/Product';
import Service from './Layout/Service';
import UserUtill from './Component/UserUtill';

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/board" element={<Board />} />
          <Route path="/" element={<UserUtill />} />
          {/* '*' 모든 경로를 포함하는 페이지 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
