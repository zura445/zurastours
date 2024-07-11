import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex items-center">
        <Link to={"/"}>
          <img src="/images/logo.jpg" alt="Logo" className="w-[100px]" />
        </Link>
        <ul className="flex text-xl">
          <li className="xs:ml-20 ml-10">
            <Link to="/tours">Tours</Link>
          </li>
          <li className="xs:ml-20 ml-10">
            <Link to="/georgia">Georgia</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
