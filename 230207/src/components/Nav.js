import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">제품</Link>
        </li>
        <li>
          <Link to="/wishlist">위시리스트</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
