import { Link, NavLink } from 'react-router-dom';
import './nav.scss';
import { MdAccountBox, MdFavoriteBorder } from 'react-icons/md';

function onDeco({ isActive }) {
  return {
    textDecoration: isActive ? 'none' : 'underline',
  };
}

function Nav() {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Link to="/">
        <img src={path + '/images/google_logo.svg'} alt="로고" />
      </Link>
      <ul className="globalNav">
        <li>
          {/* NavLink는 boolean의 값을 가진 isActive가 존재함. */}
          <NavLink to="/about" style={onDeco}>
            <MdAccountBox /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" style={onDeco}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" style={onDeco}>
            <MdFavoriteBorder />
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" style={onDeco}>
            Board
          </NavLink>
        </li>
        <li>
          <NavLink to="/userUtill" style={onDeco}>
            로그인
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
