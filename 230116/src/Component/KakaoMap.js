import React, { useState } from 'react';
import KaKaoFactory from './KaKaoFactory';
import KaKaoOffice from './KaKaoOffice';
import './kakaoMap.scss';

const KakaoMap = () => {
  const [tab, setTab] = useState(1);
  //변수, 함수
  return (
    <article className="kakaoMap">
      <h2 class="title">location</h2>
      <ul className="tabMenu">
        <li onClick={() => setTab(1)} className={tab === 1 ? 'active' : ''}>
          <h2 className="tabBtn1">office</h2>
          <KaKaoOffice />
        </li>
        <li onClick={() => setTab(2)} className={tab === 2 ? 'active' : ''}>
          <h2 className="tabBtn2">factory</h2>
          <KaKaoFactory />
        </li>
        {/* {data.map(item => <li></li>)} */}
      </ul>
    </article>
  );
};

export default KakaoMap;
