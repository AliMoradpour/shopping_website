import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
