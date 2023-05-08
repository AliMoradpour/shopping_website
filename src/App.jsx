import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import CheckoutPage from "./Pages/CheckoutPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Providers/AuthProvider";
=======
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider, { AuthContext } from "./Providers/AuthProvider";
>>>>>>> main

function App() {
  return (
    <Router>
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <Switch>
            <Route path="/cart" component={Cart} />
<<<<<<< HEAD
            <Route path="/checkout" component={CheckoutPage} />
=======
            <Route path="/checkout" component={Checkout} />
>>>>>>> main
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
