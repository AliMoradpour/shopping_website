import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Home} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
