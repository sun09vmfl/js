import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './Page1/Main';
import Sub1 from './Page1/sub1';
import Sub2 from './Page1/sub2';
import Sub3 from './Page1/sub3';
import Sub4 from './Page1/sub4';

import NotFoundPage from './Page1/NotFoundPage';
import Nav from './Page1/Nav';

function App2() {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<sub1 />} />
          <Route path="./sub2" element={<sub2 />} />
          <Route path="/" element={<sub3 />} />
          <Route path="./sub4" element={<sub4 />} />
          {/* 잘못된 페이지 연결시 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* 네비게이션 */}
        <Nav />
      </>
    </BrowserRouter>
  );
}

export default App2;
