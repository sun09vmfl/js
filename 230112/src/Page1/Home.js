import React from 'react';
import { Link } from 'react-router-dom';
import dataList from './NavData';
import { useState } from 'react';

import './nav.scss';

function Home() {
  const [data, setData] = useState(dataList);
  const [isNav, setIsNav] = useState(false);

  const OpenMenu = () => {
    setIsNav(!isNav);
  };
  return (
    <div className="globalNav">
      <div className="menu" onClick={OpenMenu}>
        menu
      </div>
      <nav className={isNav ? 'on' : ''}>
        <ul>
          {/* <li>
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
          </li> */}
          {data.map(item => (
            <li key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div
          className="closeBtn"
          onClick={() => {
            setIsNav(false);
          }}
        >
          X
        </div>
      </nav>
    </div>
  );
}

export default Home;
