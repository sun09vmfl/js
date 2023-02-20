import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './Page1/Main';
import Sub1 from './Page1/sub1';
import Sub2 from './Page1/sub2';
import Sub3 from './Page1/sub3';
import Sub4 from './Page1/sub4';
import React from 'react';

function App1(props) {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">a링크</a>
            </li>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              {/* a태그와 비슷하게 링크를 걸어주나 새로고침 안됨 */}
              <Link to="./sub1">sub1</Link>
            </li>
            <li>
              <Link to="sub2">sub2</Link>
            </li>
            <li>
              <Link to="sub3">sub3</Link>
            </li>
            <li>
              <Link to="sub4">sub4</Link>
            </li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          {/* <Route path="경로" element={<보여 주고 싶은 컴포넌트>} */}
          {/* 루트 상대 경로 */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/sub1" element={<Sub1 />}></Route>
          {/* 상대 경로 기반 */}
          <Route path="sub2" element={<Sub2 />}></Route>
          <Route path="sub3" element={<Sub3 />}></Route>
          <Route path="sub4" element={<Sub4 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App1;
