import { Routes, Route, Link } from "react-router-dom";
import Home from "./page1/Home";
import About from "./page1/About";
import Product from "./page1/Product";
import Profile from "./page1/Profile";

function App1() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        <Route path="/profile" element={<Profile />}>
          <Route path=":name" />
        </Route>
      </Routes>
    </>
  );
}

export default App1;
