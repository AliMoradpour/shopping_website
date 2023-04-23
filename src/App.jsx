import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <Router>
      <CartProvider>
      <ToastContainer />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={Home} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
