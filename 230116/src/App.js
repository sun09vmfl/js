import { Route, Routes } from 'react-router-dom';

// layout
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

//components
import GoUp from './Component/GoUp';
import About from './Component/About';
import Menu2 from './Component/Menu2';
import Menu1 from './Component/Menu1';
import Service from './Component/Service';
import Product from './Component/Product';
import Board from './Component/Board';

//회원가입 및 로그인
import Login from './Component/Login';
import Join from './Component/Join';

// 페이지를 찾을 수 없습니다.
import NotFoundPages from './Component/NotFoundPages';

// style
import './assets/style/style.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":m1" element={<Menu1 />} />
          <Route path=":m2" element={<Menu2 />} />
        </Route>

        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/board" element={<Board />} />

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        <Route path="*" element={<NotFoundPages />} />
      </Routes>

      <Footer />
      <GoUp />
    </>
  );
}

export default App;
