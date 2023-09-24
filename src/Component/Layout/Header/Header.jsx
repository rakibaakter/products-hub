import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="py-6 shadow-lg">
      <nav className="flex justify-around items-center flex-col gap-4 md:flex-row">
        <h2 className="text-3xl font-bold">Products Hub</h2>
        <ul className="flex gap-6 text-xl font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
