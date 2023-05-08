import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoutPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Providers/AuthProvider";

function App() {
  return (
    <Router>
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckoutPage} />
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
