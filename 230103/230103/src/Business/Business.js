import { useState } from 'react';
import BusinessData from '../asset/data/BusinessData';
import BusinessList from './BusinessList';
import './BusinessStyle.css';

//최상위 컴포넌트
function Business() {
  const [data, setData] = useState(BusinessData);

  return (
    <article>
      <h2>BUSINESS</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

      {/* 불러 올 컴포넌트 명 작성
      data = {data} -> 자식 컴포넌트에 businessData 전달
      data = {data} 동일하게 이름을 부여하는 것은 props라는 것을 헷갈리지 않게 하기 위해
              관용적으로 사용하는 것임 반드시는..아님 근데 걍 글캐 하면 댐
      */}
      <BusinessList data={data} />

      <p className="more">
        <a href="#">view more</a>
      </p>
    </article>
  );
}

export default Business;
