import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="w-[100px]" />
        <ul className="flex text-xl">
          <li className="ml-20">
            <Link to="/tours">Tours</Link>
          </li>
          <li className="ml-20">
            <Link to="/georgia">Georgia</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
