import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-red.png";
import "./navbar.css";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { cart } = useCart();
  const userData = useAuth();
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

      <NavBar className="loginBtn" to={userData ? "/profile" : "/login"}>
        {userData ? "Profile" : "Login / SignUp"}
      </NavBar>
    </nav>
  );
};

export default NavBar;
