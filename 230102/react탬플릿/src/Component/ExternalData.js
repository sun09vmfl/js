ExternalData.js;
import React, { useState } from 'react';
// 외부 스타일 문서 적용
import './ExternalData.css';
// 외부 data.js 문서 적용
import dataList from '../Asset/data/dataList';

function ExternalData() {
  const [data, setData] = useState(dataList);

  return (
    <>
      <table className="cafe">
        <caption>카페 메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.coffee}</td>
              <td>{item.tea}</td>
              <td>{item.drinks}</td>
              <td>{item.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ExternalData;
