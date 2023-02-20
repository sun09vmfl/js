import './css/sideNav.scss';

function SideNav({ setIdx }) {
  return (
    <ul className="sideNav">
      <li className="on" onClick={() => setIdx(0)}>
        1
      </li>
      <li onClick={() => setIdx(1)}>2</li>
      <li onClick={() => setIdx(2)}>3</li>
      <li onClick={() => setIdx(3)}>4</li>
    </ul>
  );
}

export default SideNav;
