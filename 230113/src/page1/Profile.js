import { Routes, Route, Link } from "react-router-dom";
import List from "./List";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to="html5">html5</Link>
        </li>
        <li>
          <Link to="css3">css3</Link>
        </li>
        <li>
          <Link to="js">js</Link>
        </li>
        <li>
          <Link to="git">git</Link>
        </li>
        <li>
          <Link to="react">react</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":name" element={<List />} />
      </Routes>
    </div>
  );
}

export default Profile;
