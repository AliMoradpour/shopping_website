import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-red.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div onClick={() => window.scrollTo(0, 0)}>
        <img src={logo} alt="Shopping Center Logo" />
        <p>Shopping Center</p>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="activeLink" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="activeLink">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
