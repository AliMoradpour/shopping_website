import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-red.png";
import "./navbar.css";
import { useCart } from "../../Providers/CartProvider";

const NavBar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <div>
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
            <span>{cart.length}</span>
            Cart
          </NavLink>
        </li>
      </ul>

      <div className="loginBtn">
        <NavLink to="/login">Login</NavLink>
        <div>/</div>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
