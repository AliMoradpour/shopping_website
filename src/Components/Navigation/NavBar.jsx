import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-red.png";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
<<<<<<< HEAD
import "./navbar.css";
=======
>>>>>>> main

const NavBar = () => {
  const { cart } = useCart();
  const userData = useAuth();
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
      <div className="loginBtn">
        <NavLink
          to={userData ? "/profile" : "/login"}
          activeClassName="activeLink">
          {userData ? "Profile" : "Login / Signup"}
        </NavLink>
      </div>
=======

      <NavBar className="loginBtn" to={userData ? "/profile" : "/login"}>
        {userData ? "Profile" : "Login / SignUp"}
      </NavBar>
>>>>>>> main
    </nav>
  );
};

export default NavBar;
